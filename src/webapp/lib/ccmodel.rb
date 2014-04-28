module CCModel
  require 'singleton'

  class Element
    attr_reader :id, :name

    def initialize(id, name)
      @id = id
      @name = name
    end

    def elements
      []
    end

    def to_map
      {:class => self.class.name, :id => @id, :name => @name}
    end
  end

  class Probe < Element
    def initialize(id, name)
      super(id, name)
    end
  end

  class TemperatureProbe < Probe
    def initialize(id, name)
      super(id, name)
    end
  end

  class HumidityProbe < Probe
    def initialize(id, name)
      super(id, name)
    end
  end

  class OnOffSwitch < Element
    def initialize(id, name)
      super(id, name)
    end
  end

  class Control < Element
    attr_reader :mid, :variance

    def initialize(id, name, mid, variance)
      super(id, name)
      @mid = mid
      @variance = variance
    end

    def to_map
      super.merge({:mid => @mid, :variance => @variance})
    end
  end

  class TemperatureControl < Control
    def initialize(id, name, mid, variance)
      super(id, name, mid, variance)
    end
  end

  class HumidityControl < Control
    def initialize(id, name, mid, variance)
      super(id, name, mid, variance)
    end
  end

  class Chamber < Element
    attr_reader :elements

    def initialize(id, name, elements = [])
      super(id, name)
      @elements = elements
    end
  end

  class Thingy
    include Singleton

    attr_reader :containers

    def initialize
      @containers = [
          Chamber.new(1, 'Garage', [
              TemperatureProbe.new(2, 'Garage Temperature'),
              HumidityProbe.new(3, 'Garage Humidity'),
              Chamber.new(4, 'Primary Fridge', [
                  TemperatureControl.new(5, 'Fridge Temperature', 12, 2),
                  HumidityControl.new(6, 'Fridge Humidity', 75, 5)
              ])
          ]),
          Chamber.new(7, 'Garage 2', [
              TemperatureProbe.new(8, 'Garage Temperature 2'),
              HumidityProbe.new(9, 'Garage Humidity 2'),
              Chamber.new(10, 'Primary Fridge 2', [
                  TemperatureControl.new(11, 'Fridge Temperature 2', 12, 2),
                  HumidityControl.new(12, 'Fridge Humidity 2', 75, 5)
              ])
          ])
      ]

      @map = {}
      populate_map(@containers)
    end

    def [](id)
      @map[id]
    end

    def populate_map(elements)
      elements.each { |x| @map[x.id] = x; populate_map(x.elements) }
    end
  end
end

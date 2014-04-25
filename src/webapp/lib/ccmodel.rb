module CCModel
  require 'singleton'

  class Element
    attr_reader :name

    def initialize(name)
      @name = name
    end
  end

  class Probe < Element
    def initialize(name)
      super(name)
    end
  end

  class TemperatureProbe < Probe
    def initialize(name)
      super(name)
    end
  end

  class HumidityProbe < Probe
    def initialize(name)
      super(name)
    end
  end

  class OnOffSwitch < Element
    def initialize(name)
      super(name)
    end
  end

  class Control < Element
    attr_reader :mid, :variance

    def initialize(name, mid, variance)
      super(name)
      @mid = mid
      @variance = variance
    end
  end

  class TemperatureControl < Control
    def initialize(name, mid, variance)
      super(name, mid, variance)
    end
  end

  class HumidityControl < Control
    def initialize(name, mid, variance)
      super(name, mid, variance)
    end
  end

  class Chamber < Element
    attr_reader :elements

    def initialize(name, elements = [])
      super(name)
      @elements = elements
    end
  end

  class Thingy
    include Singleton

    attr_reader :containers

    def initialize
      @containers = [
          Chamber.new('Garage', [
              TemperatureProbe.new('Garage Temperature'),
              HumidityProbe.new('Garage Humidity'),
              Chamber.new('Primary Fridge', [
                  TemperatureControl.new('Fridge Temperature', 15, 2),
                  HumidityControl.new('Fridge Humidity', 80, 10)
              ])
          ])]
    end
  end
end
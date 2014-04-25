require 'test/unit'
require '../lib/ccmodel'

class ProbeTest < Test::Unit::TestCase

  def setup
    @probe = CCModel::Probe.new('Test Probe')
  end

  def test_should_give_me_the_passed_name
    assert_equal('Test Probe', @probe.name)
  end
end

class ThingyTest < Test::Unit::TestCase
  def setup
    @containers = CCModel::Thingy.instance.containers
  end

  def test_that_the_container_has_been_properly_initialized
    assert_equal(1, @containers.size)

    assert_equal('Garage', @containers[0].name)
    assert_equal(3, @containers[0].elements.size)

    assert_equal('Garage Temperature', @containers[0].elements[0].name)
    assert_kind_of(CCModel::TemperatureProbe, @containers[0].elements[0])

    assert_equal('Garage Humidity', @containers[0].elements[1].name)
    assert_kind_of(CCModel::HumidityProbe, @containers[0].elements[1])

    assert_equal('Primary Fridge', @containers[0].elements[2].name)
    assert_kind_of(CCModel::Chamber, @containers[0].elements[2])

    assert_equal('Fridge Temperature', @containers[0].elements[2].elements[0].name)
    assert_equal(15, @containers[0].elements[2].elements[0].mid)
    assert_equal(2, @containers[0].elements[2].elements[0].variance)
    assert_equal('Fridge Humidity', @containers[0].elements[2].elements[1].name)
    assert_equal(80, @containers[0].elements[2].elements[1].mid)
    assert_equal(10, @containers[0].elements[2].elements[1].variance)
  end
end
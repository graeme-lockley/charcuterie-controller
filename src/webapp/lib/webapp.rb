require 'rubygems'
require 'sinatra'
require 'json'

require_relative 'ccmodel'

set :public_folder, File.dirname(__FILE__) + '/../data'
set :bind, '0.0.0.0'

get '/' do
  File.read(File.join('data', 'index.html'))
end

get '/api/containers' do
  content_type :json
  CCModel::Thingy.instance.containers.map { |x| x.to_map }.to_json
end


get '/api/elements/:id' do
  content_type :json

  CCModel::Thingy.instance[params[:id].to_i].to_map.to_json
end

get '/api/elements/:id/elements' do
  content_type :json

  container = CCModel::Thingy.instance[params[:id].to_i]

  if container.instance_of?(CCModel::Chamber)
    container.elements.map { |x| x.to_map }.to_json
  end
end

get '/api/elements/:id/parent' do
  content_type :json

  element_id = params[:id].to_i

  CCModel::Thingy.instance.map.each_value.find { |x|
    x.elements.any? { |y|
      y.id == element_id
    }
  }.to_map.to_json
end

put '/api/elements/:id' do
  content_type :json

  element = CCModel::Thingy.instance[params[:id].to_i]
  payload = JSON.parse(request.body.read)

  element.update_from_json(payload);

  element.to_map.to_json
end

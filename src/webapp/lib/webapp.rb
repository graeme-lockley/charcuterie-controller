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

get '/api/containers/:id/elements' do
  content_type :json

  container = CCModel::Thingy.instance[params[:id].to_i]

  if container.instance_of?(CCModel::Chamber)
    container.elements.map { |x| x.to_map }.to_json
  end
end

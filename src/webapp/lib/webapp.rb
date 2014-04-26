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
  CCModel::Thingy.instance.containers.map { |x|
    {
        :id => x.id,
        :name => x.name
    }
  }.to_json
end

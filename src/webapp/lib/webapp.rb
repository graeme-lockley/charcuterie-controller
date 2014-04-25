require 'rubygems'
require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/../data'
set :bind, '0.0.0.0'

get '/' do
	File.read(File.join('data', 'index.html'))
end

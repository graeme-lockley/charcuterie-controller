require 'rubygems'
require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/../data'

get '/' do
	File.read(File.join('data', 'index.html'))
end

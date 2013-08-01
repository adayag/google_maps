get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/map' do
  @lat = params[:lat]
  @long = params[:long]
  @text = params[:text]
  erb :map
end

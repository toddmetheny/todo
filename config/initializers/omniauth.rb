OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :twitter, 'z4JNy9aNZYtpcTv5giJt8hPpB', 'VUkdUANO944f7SlR8q8VFKniqUVELw2a4EWbxAVvAkj4AvtzTO'
end
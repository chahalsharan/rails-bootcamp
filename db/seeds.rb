# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html
Item.create!(   name: "Chain saw", 
                description: "20HP Wrox chain saw. New condition", 
                brand: "Wrox", 
                model: "WRX1234",
                condition: "New", 
                price: "200");
Item.create!(   name: "Thermal Leak detector", 
                description: "Helps finding cold drafts from doors and windows", 
                brand: "Black and Decker", 
                model: "",
                condition: "New", 
                price: "50");
User.create!(   name: "Thermal Leak detector", 
                description: "Helps finding cold drafts from doors and windows", 
                brand: "Black and Decker", 
                model: "",
                condition: "New", 
                price: "50");
require "faker"

for i in 1..15
  UserAccount.create(username: Faker::Internet.username(specifier: 5..10), password: "welcome123", password_confirmation: "welcome123")
end

for i in 1..10
  Post.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.ingverb + "?",
              body: Faker::Lorem.paragraph(sentence_count: 10), user_account_id: rand(1..15))
end

for i in 1..15
  Comment.create(body: Faker::Hacker.say_something_smart, post_id: rand(1..10), user_account_id: rand(1..15))
end

require "faker"

for i in 1..10
    UserAccount.create(username: "User#{i}", password: "welcome123", password_confirmation: "welcome123")
end

for i in 1..5
  Post.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.ingverb + "?",
              body: Faker::Lorem.paragraph(sentence_count: 10), user_account_id: rand(1..10))
end

for i in 1..10
  Comment.create(body: Faker::Hacker.say_something_smart, post_id: rand(1..5), user_account_id: rand(1..10))
end

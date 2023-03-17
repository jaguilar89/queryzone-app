require "faker"

for i in 1..10
  Post.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.ingverb + "?",
              body: Faker::Lorem.paragraph(sentence_count: 5))
end

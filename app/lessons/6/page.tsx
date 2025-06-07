"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle, Volume2, Home, Users } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SupportiveEnvironmentLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "The Impact of the Home Environment on Eating Habits",
      content: (
        <div className="space-y-4">
          <p>
            The environment in which we spend the most time, particularly our home, can have a significant impact on our
            eating habits. The mere presence and easy availability of unhealthy snack foods within the home can act as
            constant triggers, leading to increased cravings and a greater likelihood of overeating.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Environmental Triggers"
                definition="External cues in your surroundings that prompt eating behaviors"
              />
              <VocabCard
                term="Food Accessibility"
                definition="How easily available and visible food items are in your environment"
              />
              <VocabCard
                term="Support Network"
                definition="Friends, family, or groups who provide encouragement and accountability"
              />
              <VocabCard
                term="Social Pressure"
                definition="Influence from others that may encourage unhealthy eating behaviors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Negative Environmental Factors
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>Visible unhealthy snacks on counters</li>
                <li>Easy access to trigger foods</li>
                <li>Lack of healthy food options</li>
                <li>Eating in front of screens</li>
                <li>Chaotic or stressful home atmosphere</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Positive Environmental Factors
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>Healthy foods prominently displayed</li>
                <li>Trigger foods out of sight</li>
                <li>Well-stocked kitchen with nutritious options</li>
                <li>Designated eating areas</li>
                <li>Calm, peaceful dining environment</li>
              </ul>
            </div>
          </div>

          <p>
            Conversely, limiting the visibility and accessibility of trigger foods can reduce temptation and support
            healthier choices. Creating a home environment that prioritizes and facilitates healthy eating is therefore
            a crucial aspect of managing food addiction.
          </p>
        </div>
      ),
    },
    {
      type: "content",
      title: "Strategies for Stocking a Healthy Kitchen",
      content: (
        <div className="space-y-4">
          <p>
            Several proactive strategies can be employed to stock a healthy kitchen and minimize access to trigger
            foods. By consciously shaping your kitchen environment, you can significantly reduce exposure to triggers
            and make healthier food choices the easier and more convenient option.
          </p>

          <h3 className="font-medium text-lg">1. Meal Planning and Smart Shopping</h3>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Meal Planning Benefits</h4>
            <ul className="list-disc pl-5 space-y-1 text-amber-700">
              <li>Allows you to decide in advance what you will eat</li>
              <li>Helps create a focused grocery list based on your plans</li>
              <li>Reduces impulsive food purchases</li>
              <li>Ensures you have healthy ingredients available</li>
              <li>Saves time and reduces decision fatigue</li>
            </ul>
          </div>

          <p>
            Sticking to your grocery list while shopping helps to avoid impulsive purchases of unhealthy items that
            could derail your healthy eating efforts.
          </p>

          <h3 className="font-medium text-lg">2. Stock Your Kitchen with Healthy Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-3">
              <h4 className="font-medium text-green-800 mb-2">Fresh Options</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                <li>Fresh fruits</li>
                <li>Cut vegetables</li>
                <li>Greek yogurt</li>
                <li>Hummus</li>
                <li>Fresh herbs</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
              <h4 className="font-medium text-blue-800 mb-2">Pantry Staples</h4>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                <li>Nuts and seeds</li>
                <li>Whole grains</li>
                <li>Legumes</li>
                <li>Olive oil</li>
                <li>Spices and herbs</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
              <h4 className="font-medium text-purple-800 mb-2">Protein Sources</h4>
              <ul className="list-disc pl-5 space-y-1 text-purple-700 text-sm">
                <li>Lean meats</li>
                <li>Fish and seafood</li>
                <li>Eggs</li>
                <li>Plant-based proteins</li>
                <li>Protein powder</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">3. Healthier Versions of Comfort Foods</h3>
          <p>
            For those who find comfort in certain less healthy dishes, learning to prepare healthier versions of these
            comfort foods at home can be a satisfying and sustainable approach.
          </p>

          <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
            <h4 className="font-medium text-teal-800 mb-2">Healthy Swaps</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="font-medium">Instead of:</span>
                <ul className="list-disc pl-5 space-y-1 text-teal-700">
                  <li>Ice cream → Frozen banana "nice cream"</li>
                  <li>Potato chips → Baked veggie chips</li>
                  <li>Candy → Dark chocolate with nuts</li>
                </ul>
              </div>
              <div>
                <span className="font-medium">Try:</span>
                <ul className="list-disc pl-5 space-y-1 text-teal-700">
                  <li>Cauliflower rice → Instead of white rice</li>
                  <li>Zucchini noodles → Instead of pasta</li>
                  <li>Greek yogurt → Instead of sour cream</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of creating a supportive environment:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. What is the main benefit of meal planning?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">It saves money on groceries</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">It allows you to decide in advance what you will eat</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">It makes cooking faster</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">It impresses your friends</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[1] === "b" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[1] === "b" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Meal planning allows you to decide in advance what you will eat and create a grocery
                        list based on those plans.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Meal planning allows you to decide in advance what you will eat and create a grocery
                        list based on those plans.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. How can you reduce temptation from trigger foods at home?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Keep them in the refrigerator</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Limit their visibility and accessibility</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Eat them all at once</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Share them with neighbors</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[2] === "b" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[2] === "b" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! Limiting the visibility and accessibility of trigger foods can reduce temptation and
                        support healthier choices.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Limiting the visibility and accessibility of trigger foods can reduce temptation and
                        support healthier choices.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={() => setShowFeedback(true)}
              className="w-full bg-rose-600 hover:bg-rose-700"
              disabled={!selectedAnswers[1] || !selectedAnswers[2]}
            >
              Check Answers
            </Button>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Navigating Social Situations and Peer Influence",
      content: (
        <div className="space-y-4">
          <p>
            Social situations often present unique challenges for individuals managing food addiction, as many
            gatherings and events revolve around food and may involve an abundance of tempting options. Furthermore,
            there can be social pressure to indulge, even when one has intentions to eat healthily.
          </p>

          <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
            <h4 className="font-medium text-orange-800 mb-2 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Common Social Challenges
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-orange-700">
              <li>Pressure to eat unhealthy foods at gatherings</li>
              <li>Fear of offending hosts by refusing food</li>
              <li>Abundance of tempting options at events</li>
              <li>Peer pressure to "just have one"</li>
              <li>Food-centered social activities</li>
            </ul>
          </div>

          <h3 className="font-medium text-lg">Strategies for Social Success</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Before the Event</h4>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Decide what you will eat beforehand</li>
                <li>Eat a healthy snack before arriving</li>
                <li>Offer to bring a healthy dish to share</li>
                <li>Plan your responses to food offers</li>
                <li>Set realistic goals for the event</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">During the Event</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>Focus on socializing, not just food</li>
                <li>Use polite refusal techniques</li>
                <li>Stay hydrated with water</li>
                <li>Practice mindful eating if you do indulge</li>
                <li>Find a supportive friend to help</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">Polite Refusal Techniques</h3>
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
            <h4 className="font-medium text-purple-800 mb-2">What to Say</h4>
            <ul className="list-disc pl-5 space-y-1 text-purple-700">
              <li>"Thank you, but I'm not hungry right now."</li>
              <li>"It looks delicious, but I'm trying to eat lighter today."</li>
              <li>"I appreciate the offer, but I'm focusing on my health goals."</li>
              <li>"Maybe later, I'm still full from earlier."</li>
              <li>"I'd love the recipe instead!"</li>
            </ul>
          </div>

          <p>
            Additionally, it's important to be aware of the potential influence of peers on your food choices.
            Surrounding yourself with supportive individuals who understand your goals can make it easier to stick to
            your healthy eating plan, even in challenging social environments.
          </p>
        </div>
      ),
    },
    {
      type: "fill-in-blank",
      title: "Fill in the Blanks",
      content: (
        <div>
          <p className="mb-4">Complete the sentences by filling in the blanks:</p>

          <div className="space-y-6">
            <FillInBlank
              sentence="The mere presence and easy __________ of unhealthy snack foods within the home can act as constant triggers."
              answer="availability"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="__________ planning allows you to decide in advance what you will eat and create a grocery list based on those plans."
              answer="Meal"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Practicing polite __________ techniques for unwanted food offers can be beneficial in social situations."
              answer="refusal"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Building a Supportive Network",
      content: (
        <div className="space-y-4">
          <p>
            Having a strong support system is often crucial for individuals working to overcome food addiction. Building
            and nurturing a supportive network can significantly aid the recovery process by providing encouragement,
            accountability, and a sense of belonging.
          </p>

          <h3 className="font-medium text-lg">Types of Support</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-pink-50 border border-pink-100 rounded-lg p-4">
              <h4 className="font-medium text-pink-800 mb-2">Family Support</h4>
              <ul className="list-disc pl-5 space-y-1 text-pink-700">
                <li>Understanding family members</li>
                <li>Shared healthy meal planning</li>
                <li>Emotional encouragement</li>
                <li>Accountability partners</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <h4 className="font-medium text-indigo-800 mb-2">Friend Support</h4>
              <ul className="list-disc pl-5 space-y-1 text-indigo-700">
                <li>Non-judgmental listeners</li>
                <li>Exercise companions</li>
                <li>Healthy activity partners</li>
                <li>Crisis support</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
              <h4 className="font-medium text-emerald-800 mb-2">Support Groups</h4>
              <ul className="list-disc pl-5 space-y-1 text-emerald-700">
                <li>Shared experiences</li>
                <li>Practical advice</li>
                <li>Sense of community</li>
                <li>Professional guidance</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">Benefits of a Support Network</h3>
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
            <ul className="list-disc pl-5 space-y-1 text-teal-700">
              <li>
                <strong>Emotional Support:</strong> Sharing your struggles with understanding individuals can provide
                emotional support and reduce feelings of shame or isolation
              </li>
              <li>
                <strong>Practical Advice:</strong> Others who have faced similar challenges can offer valuable coping
                strategies and tips
              </li>
              <li>
                <strong>Accountability:</strong> Having people who check in on your progress can help you stay committed
                to your goals
              </li>
              <li>
                <strong>Motivation:</strong> Encouragement from others can be a powerful motivator during difficult
                times
              </li>
              <li>
                <strong>Sense of Belonging:</strong> Connecting with others who understand your experience reduces
                isolation
              </li>
            </ul>
          </div>

          <h3 className="font-medium text-lg">Finding Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
              <h4 className="font-medium text-blue-800 mb-2">In-Person Options</h4>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Local support groups</li>
                <li>Community centers</li>
                <li>Healthcare providers</li>
                <li>Religious organizations</li>
                <li>Fitness groups</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
              <h4 className="font-medium text-purple-800 mb-2">Online Options</h4>
              <ul className="list-disc pl-5 space-y-1 text-purple-700">
                <li>Online support forums</li>
                <li>Virtual support groups</li>
                <li>Social media communities</li>
                <li>Apps with community features</li>
                <li>Telehealth counseling</li>
              </ul>
            </div>
          </div>

          <p>
            Support groups, whether in person or online, can be incredibly valuable as they provide a sense of community
            and the opportunity to connect with others who share similar experiences. This shared understanding and
            encouragement can be a powerful motivator and a source of practical advice and coping strategies.
          </p>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your current environment and support system:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                What changes could you make to your home environment to better support your healthy eating goals? Who in
                your life could provide support for your journey?
              </h4>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 min-h-[120px]"
                placeholder="Write your reflection here..."
              ></textarea>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Daily Challenge</h4>
            <p className="text-amber-700">
              Today, make one specific change to your home environment that will support healthier eating. This could be
              removing trigger foods from sight, stocking up on healthy snacks, or creating a designated eating area.
              Also, reach out to one person who could be part of your support network and share your health goals with
              them.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setShowFeedback(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setShowFeedback(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-teal-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-bold text-gray-800">Day 6: Creating a Supportive Environment</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              25 XP
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
            </div>
            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="h-2 bg-gray-100"
              indicatorClassName="bg-rose-500"
            />
          </div>

          <Card className="border-gray-200 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{steps[currentStep].title}</h2>
              {steps[currentStep].content}
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Link href="/">
                <Button className="bg-rose-600 hover:bg-rose-700">
                  Complete Lesson <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button onClick={handleNext} className="bg-rose-600 hover:bg-rose-700">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function VocabCard({ term, definition }) {
  return (
    <div className="bg-white rounded-lg p-3 border border-blue-100 flex justify-between items-start">
      <div>
        <h5 className="font-medium text-gray-900">{term}</h5>
        <p className="text-sm text-gray-600">{definition}</p>
      </div>
      <button className="text-blue-600 hover:text-blue-800">
        <Volume2 className="h-4 w-4" />
      </button>
    </div>
  )
}

function FillInBlank({ sentence, answer, placeholder }) {
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase()

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
          placeholder={placeholder}
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <span>{sentence.replace("__________", "")}</span>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setIsChecked(true)} variant="outline" size="sm" disabled={!userAnswer}>
          Check
        </Button>

        {isChecked && (
          <div
            className={`p-2 rounded-md ${isCorrect ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"} flex items-center gap-2`}
          >
            {isCorrect ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Correct!</span>
              </>
            ) : (
              <>
                <HelpCircle className="h-4 w-4 text-red-600" />
                <span>Not quite. The answer is: {answer}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

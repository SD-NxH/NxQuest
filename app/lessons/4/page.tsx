"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, HelpCircle, Volume2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function PhysicalCycleLesson() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showFeedback, setShowFeedback] = useState(false)

  const steps = [
    {
      type: "content",
      title: "The Role of Sugar in Food Addiction",
      content: (
        <div className="space-y-4">
          <p>
            Sugar plays a significant role in the development and maintenance of food addiction due to its potent
            effects on the brain's reward pathways. When we consume sugary foods, they activate these pathways, leading
            to a release of dopamine, a neurotransmitter that plays a key role in feelings of pleasure and reward.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Key Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <VocabCard
                term="Dopamine"
                definition="A neurotransmitter that plays a key role in feelings of pleasure and reward"
              />
              <VocabCard
                term="Hyperpalatable"
                definition="Foods engineered to be exceptionally appealing and hard to resist"
              />
              <VocabCard
                term="Tolerance"
                definition="Needing larger amounts to achieve the same level of satisfaction"
              />
              <VocabCard
                term="Withdrawal"
                definition="Physical and emotional symptoms when reducing addictive substances"
              />
            </div>
          </div>

          <p>
            This intense activation can create a powerful desire for more sugary foods, leading to cravings even when
            the body does not have a physiological need for energy. This cycle of reward and craving is a central
            feature of addictive behaviors.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">The Sugar-Brain Connection</h4>
            <ol className="list-decimal pl-5 space-y-1 text-amber-700">
              <li>You consume sugary foods</li>
              <li>Brain's reward pathways activate</li>
              <li>Dopamine is released, creating pleasure</li>
              <li>Brain creates strong desire for more sugar</li>
              <li>Cravings develop even without physical hunger</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Processed Foods and Hyperpalatability",
      content: (
        <div className="space-y-4">
          <p>
            Processed foods are often formulated to contain high levels of sugar, fat, and salt, making them
            exceptionally palatable, or hyperpalatable. This hyperpalatability is engineered to maximize their appeal
            and to stimulate the brain's reward system, often overriding the body's natural satiety signals that
            indicate fullness.
          </p>

          <h3 className="font-medium text-lg">How Processed Foods Affect Your Brain</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>They contain the perfect combination of sugar, fat, and salt</li>
            <li>This combination triggers intense reward responses</li>
            <li>They override natural fullness signals</li>
            <li>They're designed to be irresistible and promote overconsumption</li>
            <li>They can hijack normal appetite regulation</li>
          </ul>

          <p>
            As a result, individuals may find it difficult to regulate their consumption of processed foods, leading to
            overeating and the perpetuation of the addictive cycle.
          </p>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Common Hyperpalatable Foods</h4>
            <div className="grid grid-cols-2 gap-2 text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Cookies and pastries</li>
                <li>Ice cream</li>
                <li>Potato chips</li>
                <li>Fast food burgers</li>
              </ul>
              <ul className="list-disc pl-5 space-y-1">
                <li>Candy and chocolate</li>
                <li>Sugary cereals</li>
                <li>Fried foods</li>
                <li>Processed snack foods</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "The Physical Cycle of Craving and Consumption",
      content: (
        <div className="space-y-4">
          <p>
            The physical cycle of craving and consumption in food addiction often begins with an intense desire for
            palatable foods, particularly those high in sugar and processed ingredients.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="font-medium text-blue-800 mb-2">The Addiction Cycle</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span>Intense craving for sugary/processed foods</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span>Consumption triggers dopamine release</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span>Temporary pleasure or "high" feeling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <span>Energy/mood crash and guilt feelings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  5
                </div>
                <span>More cravings to regain pleasurable feeling</span>
              </div>
            </div>
          </div>

          <p>
            Over time, the body can also develop a tolerance to these effects, requiring the consumption of larger
            amounts of sugar and processed foods to achieve the same level of satisfaction. Understanding this cycle is
            crucial for identifying key points where intervention can disrupt the pattern of addictive eating.
          </p>
        </div>
      ),
    },
    {
      type: "quiz",
      title: "Quick Check",
      content: (
        <div>
          <p className="mb-4">Let's check your understanding of the physical cycle of food addiction:</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-medium">1. What makes processed foods hyperpalatable?</h4>
              <RadioGroup
                value={selectedAnswers[1]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 1: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q1-a" />
                  <Label htmlFor="q1-a">High levels of vitamins and minerals</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q1-b" />
                  <Label htmlFor="q1-b">High levels of sugar, fat, and salt</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q1-c" />
                  <Label htmlFor="q1-c">High fiber content</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q1-d" />
                  <Label htmlFor="q1-d">Low calorie content</Label>
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
                        Correct! Processed foods are hyperpalatable due to their high levels of sugar, fat, and salt.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. Processed foods are hyperpalatable due to their high levels of sugar, fat, and salt.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">2. What happens after the initial pleasure from consuming sugary foods?</h4>
              <RadioGroup
                value={selectedAnswers[2]}
                onValueChange={(value) => setSelectedAnswers({ ...selectedAnswers, 2: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="a" id="q2-a" />
                  <Label htmlFor="q2-a">Sustained energy and mood</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="b" id="q2-b" />
                  <Label htmlFor="q2-b">Complete satisfaction with no more cravings</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="c" id="q2-c" />
                  <Label htmlFor="q2-c">Energy/mood crash and feelings of guilt</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="d" id="q2-d" />
                  <Label htmlFor="q2-d">Improved focus and concentration</Label>
                </div>
              </RadioGroup>

              {showFeedback && (
                <div
                  className={`p-3 rounded-md ${selectedAnswers[2] === "c" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
                >
                  {selectedAnswers[2] === "c" ? (
                    <div className="flex gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>
                        Correct! After the initial pleasure, there's typically an energy/mood crash and feelings of
                        guilt.
                      </span>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <HelpCircle className="h-5 w-5 text-red-600" />
                      <span>
                        Not quite. After the initial pleasure, there's typically an energy/mood crash and feelings of
                        guilt.
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
      title: "Withdrawal Symptoms",
      content: (
        <div className="space-y-4">
          <p>
            When individuals attempt to reduce their intake of sugar and processed foods, they may experience a range of
            withdrawal symptoms. These symptoms can be challenging to manage and often contribute to the difficulty
            individuals face when trying to break free from the cycle of food addiction.
          </p>

          <h3 className="font-medium text-lg">Common Withdrawal Symptoms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h4 className="font-medium text-red-800 mb-2">Physical Symptoms</h4>
              <ul className="list-disc pl-5 space-y-1 text-red-700">
                <li>Intense cravings</li>
                <li>Headaches</li>
                <li>Fatigue and low energy</li>
                <li>Sleep disturbances</li>
                <li>Digestive issues</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
              <h4 className="font-medium text-orange-800 mb-2">Emotional Symptoms</h4>
              <ul className="list-disc pl-5 space-y-1 text-orange-700">
                <li>Irritability</li>
                <li>Anxiety</li>
                <li>Mood swings</li>
                <li>Depression</li>
                <li>Difficulty concentrating</li>
              </ul>
            </div>
          </div>

          <p>
            The discomfort and distress associated with withdrawal can lead individuals to return to consuming these
            foods in an effort to alleviate the unpleasant symptoms, thus perpetuating the addictive cycle.
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
            <h4 className="font-medium text-amber-800 mb-2">Important to Remember</h4>
            <p className="text-amber-700">
              Withdrawal symptoms are temporary and typically peak within the first few days to a week of reducing sugar
              and processed foods. They are a sign that your body is adjusting to healthier eating patterns.
            </p>
          </div>
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
              sentence="Processed foods are often __________, meaning they're engineered to be exceptionally appealing and hard to resist."
              answer="hyperpalatable"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="Over time, the body can develop __________ to sugar and processed foods, requiring larger amounts to achieve the same satisfaction."
              answer="tolerance"
              placeholder="Type your answer"
            />

            <FillInBlank
              sentence="When reducing sugar intake, people may experience __________ symptoms such as headaches, fatigue, and irritability."
              answer="withdrawal"
              placeholder="Type your answer"
            />
          </div>
        </div>
      ),
    },
    {
      type: "content",
      title: "Strategies for Breaking the Physical Cycle",
      content: (
        <div className="space-y-4">
          <p>
            A more sustainable approach to breaking the physical cycle of sugar and processed food addiction often
            involves gradually reducing intake rather than attempting abrupt elimination. This allows the body and brain
            to adjust more slowly, potentially lessening the intensity of withdrawal symptoms.
          </p>

          <h3 className="font-medium text-lg">1. Gradual Reduction Strategy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Reduce sugar intake by 25% each week rather than eliminating it completely</li>
            <li>Replace one processed snack per day with a whole food alternative</li>
            <li>Gradually decrease portion sizes of trigger foods</li>
            <li>Allow your taste buds time to adjust to less sweet foods</li>
          </ul>

          <h3 className="font-medium text-lg">2. Healthy Substitutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-3">
              <h4 className="font-medium text-green-800 mb-2">Instead of sugary snacks:</h4>
              <ul className="list-disc pl-5 space-y-1 text-green-700">
                <li>Fresh fruit with nut butter</li>
                <li>Greek yogurt with berries</li>
                <li>Dark chocolate (70% cacao or higher)</li>
                <li>Homemade trail mix</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
              <h4 className="font-medium text-blue-800 mb-2">Instead of refined carbs:</h4>
              <ul className="list-disc pl-5 space-y-1 text-blue-700">
                <li>Whole grain bread instead of white bread</li>
                <li>Brown rice instead of white rice</li>
                <li>Quinoa instead of pasta</li>
                <li>Sweet potato instead of regular potato</li>
              </ul>
            </div>
          </div>

          <h3 className="font-medium text-lg">3. Coping with Withdrawal</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stay hydrated - drink plenty of water</li>
            <li>Get adequate sleep to support your body's adjustment</li>
            <li>Practice stress-reducing activities like meditation or deep breathing</li>
            <li>Engage in physical activity to boost mood and energy</li>
            <li>Use distraction techniques when cravings hit</li>
            <li>Seek support from friends, family, or support groups</li>
          </ul>
        </div>
      ),
    },
    {
      type: "writing",
      title: "Reflection",
      content: (
        <div>
          <p className="mb-4">Take a moment to reflect on your relationship with sugar and processed foods:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">
                Which processed or sugary foods do you find hardest to resist? What strategies from today's lesson could
                you try to gradually reduce your intake of these foods?
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
              For the next 24 hours, choose one processed or sugary food that you typically consume and replace it with
              a healthier alternative. Notice how you feel physically and emotionally throughout the day. Record any
              cravings or withdrawal symptoms you experience.
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
              <h1 className="text-xl font-bold text-gray-800">Day 4: Breaking the Physical Cycle</h1>
            </div>
            <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200">
              20 XP
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

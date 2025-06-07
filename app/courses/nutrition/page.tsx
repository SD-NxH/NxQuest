import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, CheckCircle, Lock } from "lucide-react"

export default function NutritionCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Nutrition Fundamentals</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-red-100 rounded-full p-6 flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-red-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Course Overview</h2>
                <p className="text-gray-600 mb-4">
                  Master the fundamentals of nutrition and develop healthy eating habits through interactive lessons and
                  practical exercises.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    8 Modules
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    24 Lessons
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    12 Quizzes
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    6 Practical Tasks
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm mb-1">
                      <span className="font-medium">Overall Progress:</span>
                      <span className="text-gray-500 ml-2">0% complete</span>
                    </div>
                    <Progress value={0} className="h-2 w-full max-w-md bg-gray-100" indicatorClassName="bg-red-500" />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Start Course</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Modules</h2>

          <div className="space-y-4">
            <ModuleCard
              number={1}
              title="Understanding Nutrition Basics"
              description="Learn the fundamental concepts of nutrition and why it matters for your health."
              lessons={3}
              unlocked={true}
              completed={false}
            />

            <ModuleCard
              number={2}
              title="Macronutrients: Proteins, Carbs, and Fats"
              description="Discover the role of macronutrients in your diet and how to balance them properly."
              lessons={4}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={3}
              title="Micronutrients: Vitamins and Minerals"
              description="Explore essential vitamins and minerals and their impact on your body functions."
              lessons={3}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={4}
              title="Understanding Food Addiction"
              description="Learn about the science behind food addiction and strategies to overcome it."
              lessons={4}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={5}
              title="Mindful Eating Practices"
              description="Develop awareness around eating habits and learn techniques for mindful consumption."
              lessons={3}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={6}
              title="Meal Planning and Preparation"
              description="Master the art of planning balanced meals and efficient food preparation."
              lessons={3}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={7}
              title="Nutrition for Special Conditions"
              description="Understand how to adapt nutrition for different health conditions and goals."
              lessons={2}
              unlocked={false}
              completed={false}
            />

            <ModuleCard
              number={8}
              title="Building Sustainable Eating Habits"
              description="Create a personalized nutrition plan that works for your lifestyle long-term."
              lessons={2}
              unlocked={false}
              completed={false}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

function ModuleCard({ number, title, description, lessons, unlocked, completed }) {
  return (
    <Card className={`border ${unlocked ? "border-gray-200" : "border-gray-200 opacity-75"}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium ${
                completed
                  ? "bg-green-100 text-green-700"
                  : unlocked
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-500"
              }`}
            >
              {number}
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          <div>
            {completed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : !unlocked ? (
              <Lock className="h-5 w-5 text-gray-400" />
            ) : null}
          </div>
        </div>
        <CardDescription className="mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <BookOpen className="h-4 w-4" />
          <span>{lessons} lessons</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={unlocked ? "default" : "outline"}
          className={`w-full ${unlocked ? "bg-red-600 hover:bg-red-700" : ""}`}
          disabled={!unlocked}
        >
          {completed ? "Review Module" : unlocked ? "Start Module" : "Locked"}
        </Button>
      </CardFooter>
    </Card>
  )
}

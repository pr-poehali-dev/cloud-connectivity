import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/data/projects"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function CasePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Кейс не найден</h1>
          <Button onClick={() => navigate("/")}>На главную</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="ghost"
              className="mb-8 -ml-2"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к кейсам
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-10">{project.description}</p>

            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {project.features.map((feature, i) => (
                <div key={i} className="bg-muted/50 rounded-xl p-5">
                  <div className="text-primary font-bold text-lg mb-1">0{i + 1}</div>
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold mb-4">О проекте</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.fullDescription}</p>
            </div>

            {project.images.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Скриншоты</h2>
                {project.images.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden">
                    <img src={img} alt={`${project.title} — экран ${i + 1}`} className="w-full" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

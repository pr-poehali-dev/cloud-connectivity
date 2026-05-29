import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Сара Чен",
      position: "CTO в TechFlow Solutions",
      content:
        "Работать с Алексом было одно удовольствие. Он сдал проект вовремя и превзошёл наши ожидания по качеству и функциональности. Его внимание к деталям и навыки решения задач исключительны.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Маркус Уильямс",
      position: "Head of Product в Quantum Dynamics",
      content:
        "Алекс помог нам перестроить всю платформу с нуля. Его техническая экспертиза и понимание бизнес-потребностей привели к продукту, который значительно улучшил вовлечённость пользователей и конверсию.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Елена Родригес",
      position: "VP Engineering в Alpine Ventures",
      content:
        "Меня впечатлила способность Алекса воплотить наше дизайн-видение в полнофункциональный сайт. Он был отзывчив, профессионален и давал ценные предложения, улучшившие общий пользовательский опыт.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Дэвид Пак",
      position: "CEO в Stellar Analytics",
      content:
        "Алекс разработал для нашей команды кастомную аналитическую панель, которая изменила подход к отслеживанию и оптимизации операций. Его решение было элегантным, интуитивным и именно тем, что нам нужно.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Анна Ковальски",
      position: "Директор по операциям в Nova Industries",
      content:
        "Корпоративная платформа от Алекса стала прорывом для нашего бизнеса. Она быстрая, безопасная, и команда в восторге от бесшовного рабочего процесса. Продуктивность выросла на 40% после запуска.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Довольные клиенты</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

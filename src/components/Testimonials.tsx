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
      name: "Алексей Морозов",
      position: "CPO в FinTech-стартапе",
      content:
        "Сергей — редкий дизайнер, который думает о продукте целиком, а не только о пикселях. Он быстро погрузился в контекст, задал правильные вопросы и предложил решения, которые реально сработали. Конверсия выросла на 55%.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Мария Соколова",
      position: "Product Manager в EdTech-компании",
      content:
        "Работали с Сергеем над редизайном платформы. Он провёл отличное исследование, нашёл настоящие причины отвала пользователей — и предложил конкретные, измеримые решения. Completion rate курсов вырос почти вдвое.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Дмитрий Захаров",
      position: "CEO маркетплейса услуг",
      content:
        "Сергей помог нам за 3 месяца запустить MVP маркетплейса. Он мыслит стратегически: сначала разобрался в бизнес-модели и пользователях, потом уже проектировал. Результат превзошёл наши ожидания.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Ирина Белова",
      position: "Head of Design в B2B SaaS",
      content:
        "Сергей создал для нас дизайн-систему с нуля. Чёткий подход, хорошая документация, отличная коммуникация с командой разработки. Онбординг новых сотрудников стал вдвое быстрее.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Никита Орлов",
      position: "CTO в HealthTech-проекте",
      content:
        "Особенно ценю в Сергее то, что он умеет работать со сложными аудиториями. Наше приложение для пожилых пользователей получило 4.8 в App Store — во многом благодаря его вниманию к accessibility.",
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
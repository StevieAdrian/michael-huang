import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatarInitials: string;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

export function Testimonials({ items }: TestimonialsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background p-8 rounded-2xl border border-border/50 relative group overflow-hidden"
        >
          <div className="absolute -top-4 -right-4 text-gold/10 group-hover:text-gold/20 transition-colors duration-500">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={`w-4 h-4 ${
                    starIndex < testimonial.rating
                      ? "fill-gold text-gold"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-muted-foreground italic mb-8 flex-1 leading-relaxed">
              "{testimonial.comment}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                {testimonial.avatarInitials}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

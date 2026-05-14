export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-foreground mb-4">Инфоцентр</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Единое информационное поле для оперативного управления и принятия решений.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</p>
            <nav className="flex flex-col gap-3">
              <a href="#philosophy" className="text-sm text-foreground hover:text-sage transition-colors">
                О нас
              </a>
              <a href="#services" className="text-sm text-foreground hover:text-sage transition-colors">
                Функции
              </a>
              <a href="#process" className="text-sm text-foreground hover:text-sage transition-colors">
                Как работаем
              </a>
              <a href="#contact" className="text-sm text-foreground hover:text-sage transition-colors">
                Контакты
              </a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Связь</p>
            <nav className="flex flex-col gap-3">
              <a href="mailto:info@infocenter.ru" className="text-sm text-foreground hover:text-sage transition-colors">
                Email
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Telegram
              </a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Документы</p>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Политика
              </a>
              <a href="#" className="text-sm text-foreground hover:text-sage transition-colors">
                Условия
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ООО «Инфоцентр». Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">Аксубаево, Республика Татарстан</p>
        </div>
      </div>
    </footer>
  )
}

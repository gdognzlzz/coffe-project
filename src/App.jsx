import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import imagen1 from './assets/imagen-1.jpeg'
import imagen2 from './assets/imagen-2.jpeg'
import imagen3 from './assets/imagen-3.jpeg'
import imagen4 from './assets/imagen-4.jpeg'
import imagen5 from './assets/imagen-5.jpeg'
import imagen6 from './assets/imagen-6.jpeg'
import imagen7 from './assets/imagen-7.jpeg'
import imagen8 from './assets/imagen-8.jpeg'
import imagen9 from './assets/imagen-9.jpeg'

const menuData = [
  {
    id: 'calientes',
    label: 'Bebidas Calientes',
    items: [
      { n: 'Americano', p: '$49' },
      { n: 'Americano Doble', p: '$59' },
      { n: 'Americano Especialidad', p: '$65' },
      { n: 'Espresso', p: '$48' },
      { n: 'Espresso Doble', p: '$50' },
      { n: 'Espresso Especialidad', p: '$55' },
      { n: 'Espresso Doble Especialidad', p: '$60' },
      {
        n: 'Método: Extracción Artesanal',
        d: 'Aeropress, Chemex, Prensa Francesa o Dripper',
        p: '$80',
      },
      { n: 'Prensa Francesa (900 ml) — Grano Lavado', p: '$130' },
      { n: 'Prensa Francesa (900 ml) — Grano Especialidad', p: '$160' },
      { n: 'Macchiato', p: '$55' },
      { n: 'Capuccino', p: '$65' },
      { n: 'Mocaccino', p: '$69' },
      { n: 'Mocaccino Doble', p: '$88' },
      { n: 'Latte Chico', p: '$68' },
      { n: 'Latte Grande', p: '$88' },
      { n: 'Flat White', p: '$68' },
      { n: 'Lechero', p: '$69' },
      { n: 'Tisana de Café', p: '$45' },
      { n: 'Latte de Sabor', p: '$95' },
      { n: 'Capuccino de Sabor', p: '$95' },
    ],
  },
  {
    id: 'frias',
    label: 'Bebidas Frías',
    items: [
      { n: 'Americano de Sabor', p: '$65' },
      { n: 'Capuccino Freddo', p: '$88' },
      { n: 'Affogato', p: '$130' },
      { n: 'Esquimo de Café', p: '$139' },
      { n: 'Horchata de Café', p: '$70' },
      { n: 'Tisana de Café', p: '$45' },
      { n: 'Frapuccino de Café', p: '$88' },
      { n: 'Frapuccino de Sabor', p: '$99' },
      { n: 'Soda Italiana', p: '$69' },
      { n: 'Jugo de Naranja', p: '$58' },
      { n: 'Limonada', d: 'Con agua natural o mineral', p: '$69' },
      { n: 'Naranjada', d: 'Con agua natural o mineral', p: '$69' },
      { n: 'Jarra de Limonada', d: 'Con agua natural o mineral', p: '$170' },
      { n: 'Jarra de Naranjada', d: 'Con agua natural o mineral', p: '$170' },
      { n: 'Agua Embotellada', p: '$40' },
      { n: 'Refresco', p: '$55' },
      { n: 'Leche con Chocolate', p: '$68' },
      { n: 'Vaso con Leche', p: '$60' },
    ],
  },
  {
    id: 'desayunos',
    label: 'Desayunos',
    note:
      'Disfrútalos de 09:00 a 13:00 hrs · Todos nuestros paquetes incluyen café americano, de olla, o tisana de café, jugo o fruta.',
    items: [
      {
        n: 'Paquete 1',
        d: 'Hot cakes (2) bañados con miel de abeja, rodajas de plátano y frutos rojos.',
        p: '$167',
      },
      {
        n: 'Paquete 2',
        d: 'Huevos revueltos, estrellados, a la mexicana, con jamón, rancheros o divorciados. Acompañados de frijoles refritos, tortillas y salsa.',
        p: '$175',
      },
      {
        n: 'Paquete 3',
        d: 'Chilaquiles verdes o rojos con huevo o pollo, queso, crema, cebolla, cilantro y aguacate.',
        p: '$190',
      },
      {
        n: 'Paquete 4 — Enchiladas Mineras',
        d: '3 tortillas rellenas de pollo o huevo, ahogadas en salsa verde con queso, crema, cebolla, cilantro y aguacate.',
        p: '$195',
      },
      {
        n: 'Paquete 5 — Enfrijoladas Veracruzanas',
        d: '3 tortillas rellenas de pollo o huevo, bañadas en salsa de frijol, con crema, queso, aguacate, plátanos fritos y cebolla morada.',
        p: '$199',
      },
      { n: 'Orden extra: pollo, longaniza o arrachera', p: '$39' },
      { n: 'Huevo extra', p: '$21' },
      { n: 'Orden de frijoles refritos con totopos', p: '$30' },
      { n: 'Desechable para llevar', p: '$10' },
    ],
  },
  {
    id: 'fruta',
    label: 'Fruta',
    items: [
      { n: 'Orden de Fruta', p: '$55' },
      {
        n: 'Bowl del Bosque',
        d: 'Frutos rojos con yogurt griego, granola y miel.',
        p: '$95',
      },
      {
        n: 'Bowl de la Montaña',
        d: 'Avena, manzana, amaranto, nuez caramelizada, yogurt griego y miel de cereza.',
        p: '$89',
      },
      {
        n: 'Hot Cakes con Fruta',
        d: 'Frutos rojos, rodajas de plátano y miel de abeja.',
        p: '$99',
      },
      {
        n: 'Pan Francés',
        d: 'Frutos rojos, crema batida y miel maple.',
        p: '$119',
      },
      {
        n: 'Smoothie de Avena',
        d: 'Frutos rojos, avena, miel, leche y yogurt griego.',
        p: '$99',
      },
    ],
  },
  {
    id: 'huevos',
    label: 'Huevitos',
    items: [
      {
        n: 'Huevos al Gusto (2)',
        d: 'Revueltos, estrellados, con jamón, rancheros o divorciados. Acompañados de frijoles refritos, tortillas y salsa.',
        p: '$135',
      },
      {
        n: 'Huevos Tirados (2)',
        d: 'Estilo Veracruz. Acompañados de queso panela, platanitos fritos y julianas de chile.',
        p: '$140',
      },
      {
        n: 'Huevos con Longaniza Ahumada (2)',
        d: 'Revueltos con frijoles refritos, queso panela, rajas de chile verde y plátanos fritos.',
        p: '$144',
      },
      {
        n: 'Tosta de Huevo Estrellado (2)',
        d: 'Sobre pan tostado, puré de aguacate con queso de cabra, germen de trigo, espinaca baby, aceite de oliva y pimienta negra.',
        p: '$140',
      },
      {
        n: 'Omelette de Espinacas y Queso de Cabra',
        d: 'Acompañado de tiras de queso panela y rodajas de aguacate.',
        p: '$144',
      },
      {
        n: 'Salsa Bochera',
        d: 'Huevo revuelto con mortadela artesanal italiana frita, en salsa roja sazonada con epazote.',
        p: '$170',
      },
      {
        n: 'Huevos Benedictinos',
        d: 'Huevos poché sobre pan rústico de vino tinto y arándanos, jamón serrano y espinacas con cebolla caramelizada, bañados en salsa holandesa.',
        p: '$199',
      },
    ],
  },
  {
    id: 'ensaladas',
    label: 'Ensaladas',
    note: 'Todas nuestras ensaladas se acompañan con aderezo miel mostaza y vinagre balsámico.',
    items: [
      {
        n: 'Fresca',
        d: 'Lechuga, espinaca, manzana, fresas, nuez caramelizada y queso de cabra.',
        p: '$145',
      },
      {
        n: 'Verde',
        d: 'Lechugas, espinaca, queso panela, tomate deshidratado, aguacate y pechuga de pollo.',
        p: '$160',
      },
      {
        n: 'Jamón Serrano',
        d: 'Lechuga, espinaca, jamón serrano, tomate deshidratado, aceituna negra, germen de trigo, nuez caramelizada y queso de cabra.',
        p: '$175',
      },
    ],
  },
  {
    id: 'panaderia',
    label: 'Panadería',
    items: [
      {
        n: 'Baguette de Jamón Serrano y Queso de Cabra',
        d: 'Jamón serrano, queso de cabra, tomate deshidratado, cebolla, lechuga y aderezo.',
        p: '$155',
      },
      {
        n: 'Chapata Gratinada Hojaldre de Carnes Frías',
        d: 'Queso de cabra, jamón serrano, pepperoni, aderezo, lechuga y cebolla gratinada con queso manchego.',
        p: '$169',
      },
      {
        n: 'Baguette de Pechuga de Pavo',
        d: 'Pechuga de pavo, aderezo, queso manchego, tomate deshidratado, aguacate, cebolla y lechuga.',
        p: '$144',
      },
      {
        n: 'Baguette de Queso Panela',
        d: 'Queso panela, aderezo, aguacate, cebolla, lechuga y espinaca.',
        p: '$140',
      },
      {
        n: 'Molletes (2)',
        d: 'Baguette tostado con frijoles refritos, longaniza ahumada, gratinados con queso manchego y pico de gallo.',
        p: '$165',
      },
      {
        n: 'Bomba de Frijol',
        d: 'Concha de vainilla rellena de frijoles refritos, longaniza ahumada, con queso manchego gratinado y mayonesa.',
        p: '$89',
      },
      {
        n: 'Pambazo Veracruzano',
        d: 'El tradicional pan de Orizaba relleno de frijoles con longaniza ahumada, mayonesa y queso panela.',
        p: '$85',
      },
    ],
  },
  {
    id: 'enchiladas',
    label: 'Enchiladas y Enfrijoladas',
    items: [
      {
        n: 'Entlaltoniladas',
        d: '3 tortillas rellenas de pollo o huevo bañadas en Tlaltonile (pipián típico veracruzano), con crema, queso cotija y cebolla morada.',
        p: '$180',
      },
      {
        n: 'Enchiladas Suizas',
        d: '3 tortillas rellenas de pollo o huevo, en verde o roja, gratinadas con queso manchego, crema y cebolla morada.',
        p: '$170',
      },
      {
        n: 'Enchiladas Mineras',
        d: '3 tortillas rellenas de pollo o huevo, ahogadas en salsa verde con queso, crema, cebolla, cilantro y aguacate.',
        p: '$165',
      },
      {
        n: 'Enfrijoladas Veracruzanas',
        d: '3 tortillas rellenas de pollo o huevo, bañadas en salsa de frijol, con crema, queso, aguacate, plátanos fritos y cebolla morada.',
        p: '$170',
      },
    ],
    addon: 'Añade longaniza ahumada o pollo +$39',
  },
  {
    id: 'chilaquiles',
    label: 'Chilaquiles',
    items: [
      {
        n: 'Chilaquiles Verdes',
        d: 'Con huevo o pollo, queso, crema, cebolla, cilantro y aguacate.',
        p: '$155',
      },
      {
        n: 'Chilaquiles Rojos',
        d: 'Con huevo o pollo, queso, crema, cebolla, cilantro y aguacate.',
        p: '$155',
      },
      {
        n: 'Chilaquiles Rellenos',
        d: 'De chicharrón prensado en salsa roja, con cilantro, cebolla, queso, crema y aguacate.',
        p: '$170',
      },
      {
        n: 'Chilaquiles con Tlaltonile',
        d: 'Con huevo o pollo, queso, crema y cebolla morada.',
        p: '$175',
      },
    ],
    addon: 'Añade longaniza ahumada o pollo +$39',
  },
  {
    id: 'antojitos',
    label: 'Antojitos Fritos',
    items: [
      {
        n: 'Picaditas Veracruzanas',
        d: '3 picaditas de maíz azul con salsa de chicatanas, servidas con rodaja de aguacate.',
        p: '$80',
      },
      {
        n: 'Sopes',
        d: '3 piezas de pollo o tierritas, con frijoles, cebolla picada, cilantro, queso y salsa verde.',
        p: '$80',
      },
      {
        n: 'Quesadillas Fritas de Hongos de Encino',
        d: 'Por temporada. 3 piezas en masa azul, bañadas con crema y queso.',
        p: '$155',
      },
      {
        n: 'Polenta',
        d: '2 tiras de budín de harina de maíz fritas, con frijoles, queso y salsa de la casa.',
        p: '$75',
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    items: [
      { n: 'Concha Artesanal', p: '$30' },
      { n: 'Concha con Nata', p: '$80' },
      { n: 'Pan de Huatusco', p: '$25' },
      { n: 'Flan de Café', p: '$70' },
      { n: 'Flan de Elote', p: '$70' },
      { n: 'Pan de Plátano', p: '$65' },
      { n: 'Pan de Plátano con Helado', p: '$125' },
      { n: 'Helado de Café', p: '$89' },
      { n: 'Helado de Vainilla', p: '$89' },
      { n: 'Affogatto', p: '$139' },
      { n: 'Orden de Plátanos Fritos estilo Veracruz', d: 'Con crema y queso.', p: '$70' },
      { n: 'Orden de Platanitos Fritos', d: 'Con lechera, mermelada y/o crema.', p: '$65' },
      {
        n: 'Pambazos Veracruzanos Dulces',
        d: 'Nutella con plátano · Philadelphia con cajeta · Fresas con chocolate o lechera.',
        p: '$65',
      },
      { n: 'Desechable para llevar', p: '$10' },
    ],
  },
  {
    id: 'productos',
    label: 'Nuestros Productos',
    items: [
      { n: 'Caja de Galletas', p: '$110' },
      { n: 'Tisana de Café (200 gr)', p: '$150' },
      { n: 'Endulzante Natural de Caña (1/4 kg)', p: '$75' },
      { n: 'Salsa de Chicatanas (100 ml)', p: '$300' },
      { n: 'Salsa Macha (100 ml)', p: '$100' },
      { n: 'Torito de Macadamia (1/4 kg)', p: '$150' },
      { n: 'Taza Decorativa', p: '$160' },
      { n: 'Longaniza Ahumada (1/4 kg)', p: '$100' },
      { n: 'Mortadela Italiana (1/4 kg)', p: '$120' },
    ],
  },
]

const galleryItems = [
  {
    title: 'Tueste Obscuro',
    description:
      'Notas intensas y achocolatadas, ideal para quienes buscan un café con cuerpo.',
    source: imagen5,
  },
  {
    title: 'Tueste Medio',
    description:
      'Equilibrado y aromático, con notas frutales de nuestra finca en Veracruz.',
    source: imagen6,
  },
  {
    title: 'Nuestra Finca',
    description: 'Café de altura cultivado a 1200 msnm por la familia Gaytán López.',
    source: imagen7,
  },
  {
    title: 'Grano Selecto',
    description: '100% arábiga, calidad exportación, cosechado y seleccionado a mano.',
    source: imagen8,
  },
  {
    title: 'En Almán La Finca',
    description: 'Un espacio pensado para disfrutar cada taza con calma.',
    source: imagen9,
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/AlmanlaFinca/?locale=es_LA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/almanlafinca/?hl=es',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const locationBadges = [
  ['Servicio', ['Pedidos desde el auto', 'Para llevar']],
  ['Aspectos destacados', ['Terraza', 'Buen café', 'Postres', 'Música en vivo']],
  ['Servicios', ['Wi‑Fi gratis', 'Estacionamiento gratuito', 'Pet friendly']],
  ['Pagos', ['Pagos móviles NFC', 'Tarjetas de crédito', 'Tarjetas de débito', 'Efectivo']],
]

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function priceToNumber(value) {
  return Number.parseInt(String(value || '0').replace(/[^0-9]/g, ''), 10) || 0
}

function createBeans(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: `${count}-${index}`,
    left: `${Math.random() * 94 + 2}%`,
    duration: `${5 + Math.random() * 4}s`,
    delay: `${Math.random() * 6}s`,
    scale: 0.7 + Math.random() * 0.7,
  }))
}

function MenuCategory({ category, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) {
      return
    }

    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : ''
  }, [isOpen])

  return (
    <div className={`menu-cat${isOpen ? ' open' : ''}`}>
      <button
        type="button"
        className="menu-cat-head"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="bean-ico" aria-hidden="true" />
        <span>{category.label}</span>
        <span className="cat-count">{category.items.length} opciones</span>
        <span className="chevron" aria-hidden="true">
          +
        </span>
      </button>
      <div className="menu-cat-body" ref={bodyRef}>
        {category.note ? <div className="menu-note">{category.note}</div> : null}
        <div className="menu-list">
          {category.items.map((item) => (
            <div className="menu-item" key={`${category.id}-${item.n}`}>
              <div>
                <span className="name">{item.n}</span>
                {item.d ? <span className="desc">{item.d}</span> : null}
              </div>
              <span className="price">{item.p || ''}</span>
            </div>
          ))}
        </div>
        {category.addon ? <div className="menu-addon">{category.addon}</div> : null}
      </div>
    </div>
  )
}

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [openCategory, setOpenCategory] = useState(null)
  const [orderCategory, setOrderCategory] = useState(menuData[0].id)
  const [orderItemIndex, setOrderItemIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])
  const [orderMode, setOrderMode] = useState('Para comer aquí')
  const [orderName, setOrderName] = useState('')
  const [orderSpecs, setOrderSpecs] = useState('')
  const [guestCount, setGuestCount] = useState(1)
  const [lightbox, setLightbox] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryDragOffset, setGalleryDragOffset] = useState(0)
  const [galleryDragging, setGalleryDragging] = useState(false)
  const [cupState, setCupState] = useState({
    progress: 0,
    fill: 0,
    photo: 0,
    eyebrow: 'Grano de altura',
    text: 'Cada taza empieza en la finca',
    welcome: false,
    beansOpacity: 1,
  })

  const heroBeans = useMemo(() => createBeans(22), [])
  const cupBeans = useMemo(() => createBeans(10), [])
  const cupSectionRef = useRef(null)
  const navRef = useRef(null)
  const galleryViewportRef = useRef(null)
  const galleryDragRef = useRef({ startX: 0, offset: 0, moved: false, dragging: false })

  const selectedCategory = menuData.find((category) => category.id === orderCategory) || menuData[0]
  const selectedItem = selectedCategory.items[orderItemIndex] || selectedCategory.items[0]

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60)

      const section = cupSectionRef.current
      if (!section) {
        return
      }

      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const progress = total <= 0 ? 1 : clamp(-rect.top / total, 0, 1)

      const fillStart = 0.35
      const fillEnd = 0.85
      const fillProgress = clamp((progress - fillStart) / (fillEnd - fillStart), 0, 1)
      const photoProgress = clamp((progress - 0.8) / 0.2, 0, 1)

      setCupState({
        progress,
        fill: fillProgress,
        photo: photoProgress,
        eyebrow:
          progress < 0.35
            ? 'Grano de altura'
            : progress < 0.8
              ? 'Extracción artesanal'
              : 'Calidad de exportación',
        text:
          progress < 0.35
            ? 'Cada taza empieza en la finca'
            : progress < 0.8
              ? 'Se sirve despacio, como debe ser'
              : 'Así se ve, así sabe',
        welcome: progress > 0.93,
        beansOpacity: progress < 0.5 ? 1 : clamp(1 - (progress - 0.5) * 4, 0, 1),
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
          }
        })
      },
      { threshold: 0.2 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null)
        setNavOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (navOpen && navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [navOpen])

  function handleGalleryPointerDown(event) {
    galleryDragRef.current = { startX: event.clientX, offset: 0, moved: false, dragging: true }
    setGalleryDragging(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
    event.preventDefault()
  }

  function handleGalleryPointerMove(event) {
    const drag = galleryDragRef.current
    if (!drag.dragging) {
      return
    }
    event.preventDefault()
    const delta = event.clientX - drag.startX
    drag.offset = delta
    if (Math.abs(delta) > 6) {
      drag.moved = true
    }
    setGalleryDragOffset(delta)
  }

  function endGalleryDrag(event) {
    const drag = galleryDragRef.current
    if (!drag.dragging) {
      return
    }
    if (event?.currentTarget?.releasePointerCapture && event.pointerId !== undefined) {
      try {
        event.currentTarget.releasePointerCapture(event.pointerId)
      } catch {
        // ignore if capture was already released
      }
    }
    const threshold = 60
    if (drag.offset < -threshold) {
      setGalleryIndex((current) => (current + 1) % galleryItems.length)
    } else if (drag.offset > threshold) {
      setGalleryIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length)
    }
    drag.dragging = false
    setGalleryDragging(false)
    setGalleryDragOffset(0)
  }

  function handleGalleryCardClick(item) {
    if (galleryDragRef.current.moved) {
      return
    }
    setLightbox(item)
  }

  function stepGallery(delta) {
    setGalleryIndex((current) => (current + delta + galleryItems.length) % galleryItems.length)
  }

  function addToCart() {
    const price = priceToNumber(selectedItem.p)
    const lineId = `${selectedCategory.id}-${selectedItem.n}`

    setCart((current) => {
      const existing = current.find((line) => line.id === lineId)
      if (existing) {
        return current.map((line) =>
          line.id === lineId ? { ...line, qty: Math.min(20, line.qty + quantity) } : line,
        )
      }

      return [
        ...current,
        {
          id: lineId,
          name: selectedItem.n,
          price,
          qty: quantity,
        },
      ]
    })

    setQuantity(1)
  }

  function updateCartLine(lineId, delta) {
    setCart((current) =>
      current
        .map((line) => {
          if (line.id !== lineId) {
            return line
          }

          const nextQty = clamp(line.qty + delta, 0, 20)
          return { ...line, qty: nextQty }
        })
        .filter((line) => line.qty > 0),
    )
  }

  function removeCartLine(lineId) {
    setCart((current) => current.filter((line) => line.id !== lineId))
  }

  function sendOrder() {
    if (cart.length === 0) {
      window.alert('Agrega al menos un platillo a tu pedido.')
      return
    }

    const total = cart.reduce((sum, line) => sum + line.price * line.qty, 0)
    let message = 'Hola, quiero hacer una orden anticipada en Almán La Finca.\n'

    if (orderName.trim()) {
      message += `Nombre: ${orderName.trim()}\n`
    }

    if (orderMode === 'Para comer aquí') {
      message += `Personas: ${guestCount}\n`
    }
    message += '\nPedido:\n'
    cart.forEach((line) => {
      message += `- ${line.name} x${line.qty} ($${line.price * line.qty})\n`
    })
    message += `\nTotal: $${total}\n`
    message += `${orderMode}.\n`

    if (orderSpecs.trim()) {
      message += `Especificaciones: ${orderSpecs.trim()}\n`
    }

    message += 'Pagaré por transferencia, ¿me pueden compartir los datos?'

    const whatsappUrl = `https://wa.me/527714423130?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const total = cart.reduce((sum, line) => sum + line.price * line.qty, 0)

  return (
    <div className="app-shell">
      <div className="grain" aria-hidden="true" />

      <nav className={`nav${navScrolled ? ' scrolled' : ''}`} ref={navRef}>
        <div className="nav-logo">Almán</div>
        <div className={`nav-links${navOpen ? ' open' : ''}`}>
          <a href="#nosotros" onClick={() => setNavOpen(false)}>
            Nosotros
          </a>
          <a href="#galeria" onClick={() => setNavOpen(false)}>
            Nuestro Café
          </a>
          <a href="#menu" onClick={() => setNavOpen(false)}>
            Menú
          </a>
          <a href="#pedido" onClick={() => setNavOpen(false)}>
            Ordena
          </a>
          <a href="#ubicacion" onClick={() => setNavOpen(false)}>
            Detalles
          </a>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Menú"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <main>
        <section className="hero" id="inicio">
          <div className="beans-layer" aria-hidden="true">
            {heroBeans.map((bean) => (
              <span
                key={bean.id}
                className="bean"
                style={{ left: bean.left, animationDuration: bean.duration, animationDelay: bean.delay, transform: `scale(${bean.scale})` }}
              />
            ))}
          </div>
          <div className="hero-inner">
            <h1 className="hero-title">Almán</h1>
            <div className="hero-sub">La Finca</div>
            <p className="hero-tag">Café y cocina de las altas montañas de Veracruz</p>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span>Desliza</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section className="cup-section" id="cupSection" ref={cupSectionRef}>
          <div className="cup-sticky">
            <div className="beans-layer beans-layer--cup" aria-hidden="true" style={{ opacity: cupState.beansOpacity }}>
              {cupBeans.map((bean) => (
                <span
                  key={bean.id}
                  className="bean"
                  style={{ left: bean.left, animationDuration: bean.duration, animationDelay: bean.delay, transform: `scale(${bean.scale})` }}
                />
              ))}
            </div>

            <div className="cup-stage">
              <div className="glass-wrap">
                <div className="glass-shine" />
                <div className="glass-outline">
                  <div className="liquid" style={{ height: `${cupState.fill * 88}%` }} />
                  <div
                    className="foam"
                    style={{
                      height: cupState.fill > 0.05 ? '10px' : '0px',
                      bottom: `${cupState.fill * 88}%`,
                      opacity: cupState.fill > 0.05 ? 1 : 0,
                    }}
                  />
                </div>
                <div className="photo-reveal" style={{ opacity: cupState.photo }}>
                  <img src={imagen1} alt="Espresso Almán en las rocas" />
                </div>
              </div>

              <div className="cup-caption">
                <div className="eyebrow" id="cupEyebrow">
                  {cupState.eyebrow}
                </div>
                <h3 id="cupText">{cupState.text}</h3>
                <div className={`cup-welcome${cupState.welcome ? ' show' : ''}`} id="cupWelcome">
                  Bienvenido
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="nosotros">
          <div className="hanging-plant">
            <img src={imagen2} alt="Plantas colgantes" />
          </div>
          <div className="wrap about-grid">
            <div className="about-media reveal" style={{ backgroundImage: `url(${imagen3})` }}>
              <img src={imagen4} alt="Interior de Almán La Finca" />
            </div>
            <div className="about-text reveal">
              <div className="eyebrow">Nosotros</div>
              <h2>Almán, La Finca</h2>
              <p>
                Somos un espacio pensado para quedarse: madera cálida, luz natural y el aroma constante de café recién molido. Trabajamos grano 100% arábiga de altura, tostado con cuidado, para llevar a tu taza el sabor de las montañas de Veracruz.
              </p>
              <p>
                Aquí el tiempo se toma con calma — entre plantas, tazas de barro y una selección de música que acompaña cada sobremesa.
              </p>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="gallery-head">
            <div className="eyebrow">Nuestro Café</div>
            <h2>Galería</h2>
          </div>
          <div className="gallery-carousel">
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={() => stepGallery(-1)}
              aria-label="Producto anterior"
            >
              ‹
            </button>
            <div
              className="gallery-viewport"
              ref={galleryViewportRef}
              onPointerDown={handleGalleryPointerDown}
              onPointerMove={handleGalleryPointerMove}
              onPointerUp={endGalleryDrag}
              onPointerLeave={endGalleryDrag}
              onPointerCancel={endGalleryDrag}
            >
              <div className={`gallery-track${galleryDragging ? ' dragging' : ''}`} id="galleryTrack">
                {galleryItems.map((item, index) => {
                const count = galleryItems.length
                let offset = index - galleryIndex
                if (offset > count / 2) {
                  offset -= count
                }
                if (offset < -count / 2) {
                  offset += count
                }
                const absOffset = Math.abs(offset)
                const isVisible = absOffset <= 2
                const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.6
                const translate = `calc(-50% + (${offset}) * var(--gallery-step) + ${galleryDragOffset}px)`

                return (
                  <div
                    className={`gallery-card${absOffset === 0 ? ' active' : ''}`}
                    key={item.title}
                    style={{
                      transform: `translateX(${translate}) scale(${scale})`,
                      zIndex: count - absOffset,
                      opacity: isVisible ? 1 - absOffset * 0.22 : 0,
                      pointerEvents: isVisible ? 'auto' : 'none',
                    }}
                  >
                    <button
                      type="button"
                      className="gallery-photo"
                      onClick={() => handleGalleryCardClick(item)}
                      aria-label={`Ver ${item.title}`}
                    >
                      <img src={item.source} alt={`Almán La Finca: ${item.title}`} draggable="false" />
                    </button>
                    <div className="gallery-caption">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
                })}
              </div>
            </div>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={() => stepGallery(1)}
              aria-label="Producto siguiente"
            >
              ›
            </button>
          </div>
          <div className="gallery-dots">
            {galleryItems.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`gallery-dot${index === galleryIndex ? ' active' : ''}`}
                aria-label={`Ir a ${item.title}`}
                onClick={() => setGalleryIndex(index)}
              />
            ))}
          </div>
          {lightbox ? (
            <div className="gallery-lightbox open" onClick={() => setLightbox(null)} role="presentation">
              <button
                type="button"
                className="gallery-lightbox-close"
                aria-label="Cerrar"
                onClick={() => setLightbox(null)}
              >
                &times;
              </button>
              <img src={lightbox.source} alt={lightbox.title} onClick={(event) => event.stopPropagation()} />
            </div>
          ) : null}
        </section>

        <section className="menu-section" id="menu">
          <div className="wrap">
            <div className="menu-head">
              <div className="eyebrow">Nuestra carta</div>
              <h2>Menú</h2>
            </div>
            <div className="menu-divider" />

            <div className="menu-accordion">
              <div className="menu-col">
                {menuData.slice(0, 6).map((category) => (
                  <MenuCategory
                    key={category.id}
                    category={category}
                    isOpen={openCategory === category.id}
                    onToggle={() =>
                      setOpenCategory((current) => (current === category.id ? null : category.id))
                    }
                  />
                ))}
              </div>
              <div className="menu-col">
                {menuData.slice(6).map((category) => (
                  <MenuCategory
                    key={category.id}
                    category={category}
                    isOpen={openCategory === category.id}
                    onToggle={() =>
                      setOpenCategory((current) => (current === category.id ? null : category.id))
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="order-section" id="pedido">
          <div className="wrap">
            <div className="menu-head">
              <div className="eyebrow">¿Llegas más tarde?</div>
              <h2>Orden anticipada</h2>
              <p>Arma tu pedido desde aquí, paga por transferencia y lo tenemos listo justo a tiempo.</p>
              <p className="order-lead-note">Realizalo con al menos 1 hora de anticipación.</p>
            </div>
            <div className="menu-divider" />

            <div className="order-box">
              <div className="order-picker">
                <select
                  value={orderCategory}
                  aria-label="Categoría"
                  onChange={(event) => {
                    setOrderCategory(event.target.value)
                    setOrderItemIndex(0)
                  }}
                >
                  {menuData.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>

                <select
                  value={orderItemIndex}
                  aria-label="Platillo"
                  onChange={(event) => setOrderItemIndex(Number(event.target.value))}
                >
                  {selectedCategory.items.map((item, index) => (
                    <option value={index} key={`${selectedCategory.id}-${item.n}-${index}`}>
                      {item.n} {item.p ? `— ${item.p}` : ''}
                    </option>
                  ))}
                </select>

                <div className="order-qty">
                  <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Restar">
                    −
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => setQuantity((current) => Math.min(20, current + 1))} aria-label="Sumar">
                    +
                  </button>
                </div>

                <button type="button" className="order-add" onClick={addToCart}>
                  Agregar
                </button>
              </div>

              <div className="order-cart">
                {cart.length === 0 ? (
                  <p className="order-empty">Aún no has agregado nada.</p>
                ) : (
                  cart.map((line) => (
                    <div className="order-cart-item" key={line.id}>
                      <span className="oi-name">{line.name}</span>
                      <span className="oi-right">
                        <span className="oi-stepper">
                          <button type="button" aria-label="Restar uno" onClick={() => updateCartLine(line.id, -1)}>
                            −
                          </button>
                          <span className="oi-qty">{line.qty}</span>
                          <button type="button" aria-label="Sumar uno" onClick={() => updateCartLine(line.id, 1)}>
                            +
                          </button>
                        </span>
                        <span className="oi-price">${line.price * line.qty}</span>
                        <button type="button" className="oi-remove" aria-label="Quitar" onClick={() => removeCartLine(line.id)}>
                          &times;
                        </button>
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="order-total-row">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <div className="order-eta">
                <span>¿Para comer aquí o para llevar?</span>
                <div className="order-eta-options">
                  {['Para comer aquí', 'Para llevar'].map((mode) => (
                    <button
                      type="button"
                      className={`eta-btn${orderMode === mode ? ' active' : ''}`}
                      key={mode}
                      onClick={() => setOrderMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {orderMode === 'Para comer aquí' ? (
                <div className="order-eta order-people">
                  <span>¿Cuántas personas son?</span>
                  <div className="order-qty">
                    <button
                      type="button"
                      onClick={() => setGuestCount((current) => Math.max(1, current - 1))}
                      aria-label="Restar persona"
                    >
                      −
                    </button>
                    <span>{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount((current) => Math.min(20, current + 1))}
                      aria-label="Sumar persona"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : null}

              <input
                type="text"
                className="order-name"
                placeholder="Tu nombre (para identificar el pedido)"
                value={orderName}
                onChange={(event) => setOrderName(event.target.value)}
              />

              <textarea
                className="order-name order-specs"
                placeholder="Especificaciones (opcional): sin cebolla, sin aguacate, etc."
                value={orderSpecs}
                onChange={(event) => setOrderSpecs(event.target.value)}
              />

              <button type="button" className="order-send" onClick={sendOrder}>
                Enviar pedido por WhatsApp
              </button>
              <p className="order-note">
                Al enviar, te confirmamos por WhatsApp los datos para tu transferencia. Tu pedido se prepara en cuanto se confirma el pago.
              </p>
            </div>
          </div>
        </section>

        <section className="location" id="ubicacion">
          <div className="wrap loc-grid">
            <div className="loc-text">
              <div className="eyebrow">Visítanos</div>
              <h2>Detalles</h2>
              <p className="loc-address">
                Calle Gral. Nicolás Flores esquina Antonio Tagle, piso 20-2, Col. Juan C. Doria, 42083 Pachuca de Soto, Hgo.
              </p>

              <div className="chip-group">
                <h4>Horario</h4>
                <ul className="hours-list">
                  <li>
                    <span>Lunes - Sábado</span>
                    <span>9:00 - 21:00 hrs.</span>
                  </li>
                  <li>
                    <span>Domingo</span>
                    <span>9:00 - 18:00 hrs.</span>
                  </li>
                </ul>
              </div>

              <div className="chip-group">
                <h4>Reservaciones</h4>
                <ul className="hours-list">
                  <li>
                    <span>Whatsapp / Llamada</span>
                    <span>
                      <a href="tel:7717724153">771 772 4153</a>
                    </span>
                  </li>
                </ul>
              </div>

              {locationBadges.map(([title, badges]) => (
                <div className="chip-group" key={title}>
                  <h4>{title}</h4>
                  <div className="chips">
                    {badges.map((badge) => (
                      <span className="chip" key={badge}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="map-frame">
              <iframe
                title="Ubicación de Almán La Finca"
                src="https://www.google.com/maps?q=Calle+Gral+Nicolas+Flores+esquina+Antonio+Tagle+20-2+piso+Juan+C+Doria+42083+Pachuca+de+Soto+Hgo&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-logo">
                Almán
                <small>La Finca</small>
              </div>
              <p className="foot-intro">Café gourmet de altura, calidad de exportación.</p>
            </div>

            <div className="foot-col">
              <h5>Contacto</h5>
              <a href="tel:+527719817059">+52 771 981 7059</a>
              <p>Juan C. Doria, Pachuca de Soto, Hgo.</p>
            </div>

            <div className="foot-col">
              <h5>Síguenos</h5>
              <div className="social-row">
                {socialLinks.map((link) => (
                  <a
                    className="social-btn"
                    href={link.href}
                    key={link.label}
                    title={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© 2026 Almán La Finca. Todos los derechos reservados.</span>
            <span>Pedido rápido por WhatsApp · Menú completo · Café de altura</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

// Tipos: "single" (una opción), "multi" (casillas), "tf" (verdadero/falso), "text" (respuesta escrita)
// correct: posiciones desde 0 · answers: respuestas aceptadas en "text" · explanation: justificaciones UV
const ALL_QUESTIONS = [
  {
    id: 1,
    type: "single",
    text: "Un bien que puede ser utilizado para producir otros bienes, como una estación de trabajo de alto rendimiento en una empresa de ingeniería, se clasifica como:",
    options: [
      "Bien intermedio",
      "Bien de consumo",
      "Bien libre",
      "Bien de capital"
    ],
    correct: [3],
    explanation: "Anotación UV: Los bienes de capital son duraderos, no se destinan al consumo final sino a la producción de otros bienes o servicios."
  },
  {
    id: 2,
    type: "single",
    text: "En el circuito económico simple, ¿qué flujo representan las líneas que van desde las Familias hacia el Mercado de Factores Productivos?",
    options: [
      "Flujo de tierra, trabajo, capital y tecnología",
      "Flujo real de bienes y servicios finales",
      "Flujo monetario de salarios e intereses",
      "Flujo de impuestos y subsidios"
    ],
    correct: [0],
    explanation: "Anotación UV: Las familias son propietarias de los factores y los ofrecen físicamente a las empresas para la producción."
  },
  {
    id: 3,
    type: "single",
    text: "En el contexto de la actividad económica, ¿cuál es la diferencia entre un hecho y un acto económico?",
    options: [
      "La participación del estado en el proceso",
      "La cantidad de dinero involucrada en la transacción",
      "La voluntad y la conciencia del individuo",
      "La durabilidad del bien producido"
    ],
    correct: [2],
    explanation: "Anotación UV: Un acto económico implica una decisión basada en la conciencia y la voluntad del individuo, a diferencia del hecho que es un acontecimiento que, al ocurrir, produce un efecto económico."
  },
  {
    id: 4,
    type: "single",
    text: "¿Cuál es la remuneración que reciben las familias por el factor \"trabajo\"?",
    options: [
      "Beneficio",
      "Renta o alquiler",
      "Salario o sueldo",
      "Interés"
    ],
    correct: [2],
    explanation: "Anotación UV: Compensación monetaria por la actividad manual o intelectual realizada de manera dependiente."
  },
  {
    id: 5,
    type: "single",
    text: "Si una empresa de desarrollo de software utiliza los mismos programadores para crear una App móvil o un sistema Web, ¿qué concepto económico explica la pérdida de la alternativa no elegida?",
    options: [
      "Costo Marginal",
      "Costo de oportunidad",
      "Rendimiento decreciente",
      "Ventaja comparativa"
    ],
    correct: [1],
    explanation: "Anotación UV: Representa el valor real de los bienes o servicios en el mejor empleo alternativo al que se debe renunciar."
  },
  {
    id: 6,
    type: "single",
    text: "¿Cuál es el objeto de estudio de la economía como ciencia social?",
    options: [
      "La administración de recursos abundantes para la creación de riqueza monetaria",
      "La organización de hechos codificados para predecir fenómenos naturales",
      "El estudio exacto y preciso de variables físicas sin margen de error estadístico",
      "La conducta humana dirigida a satisfacer necesidades mediante recursos escasos"
    ],
    correct: [3],
    explanation: "Anotación UV: El principio de escasez es el eje central, analizando cómo las sociedades administran medios limitados frente a fines infinitos."
  },
  {
    id: 7,
    type: "single",
    text: "¿Cuál de las siguientes condiciones describe el punto de cierre de una empresa en competencia perfecta?",
    options: [
      "El beneficio marginal es igual a cero",
      "El precio del mercado es igual al mínimo del costo medio",
      "El precio del mercado es igual al mínimo del costo variable medio",
      "Los ingresos totales superan a los costos variables totales"
    ],
    correct: [2],
    explanation: "Respuesta correcta UV: El precio del mercado es igual al mínimo del costo variable medio (P = mín CVMe)."
  },
  {
    id: 8,
    type: "single",
    text: "¿Por qué se considera que un productor racional no debe trabajar en la Etapa III de la función producción?",
    options: [
      "Porque la productividad media es máxima en ese punto",
      "Porque los costos fijos son muy elevados",
      "Porque la empresa ya alcanzó el equilibrio del consumidor",
      "Porque el producto marginal es negativo y el producto total disminuye"
    ],
    correct: [3],
    explanation: "Anotación UV: Correcto, en la Etapa III la función producción es decreciente con rendimientos decrecientes."
  },
  {
    id: 9,
    type: "single",
    text: "Si al aumentar el ingreso de un consumidor de $10.000 a $15.000, su demanda del bien X disminuye, el bien X es un:",
    options: [
      "Bien de lujo",
      "Bien inferior",
      "Bien complementario",
      "Bien normal"
    ],
    correct: [1],
    explanation: "Anotación UV: Los bienes inferiores tienen una elasticidad ingreso negativa pues se sustituyen por bienes de mejor calidad al subir el ingreso. (Nota sobre 'Bien normal': en ellos la demanda aumenta cuando el ingreso sube)."
  },
  {
    id: 10,
    type: "single",
    text: "Si el precio de una motocicleta es $180.000 y el de una bicicleta es $90.000, ¿cuál es el precio relativo de la motocicleta en términos de bicicletas?",
    options: [
      "0,5 bicicletas",
      "2 bicicletas",
      "1,5 bicicletas",
      "$90.000"
    ],
    correct: [1],
    explanation: "Respuesta correcta UV: 2 bicicletas ($180.000 / $90.000 = 2)."
  },
  {
    id: 11,
    type: "single",
    text: "En un sistema de economía centralizada, ¿quién toma las decisiones sobre qué, cómo y para quién producir?",
    options: [
      "Las leyes de la oferta y la demanda",
      "El Estado",
      "La interacción equilibrada entre consumidores y empresas",
      "El mercado a través del sistema de precios"
    ],
    correct: [1],
    explanation: "Respuesta correcta UV: El Estado."
  },
  {
    id: 12,
    type: "single",
    text: "Un aumento en el ingreso disponible de los consumidores provocará un desplazamiento de la curva de demanda hacia la izquierda si el bien en cuestión es:",
    options: [
      "Un bien normal",
      "Un bien inferior",
      "Un bien de lujo o suntuario",
      "Un bien complementario"
    ],
    correct: [1],
    explanation: "Anotación UV: Para los bienes inferiores existe una relación inversa entre el ingreso y la demanda; al ser más ricos, los consumidores optan por sustitutos de mayor calidad."
  },
  {
    id: 13,
    type: "single",
    text: "¿Qué sector de la producción se ocupa de las industrias culturales, el entretenimiento y la educación?",
    options: [
      "Sector secundario",
      "Sector Cuaternario",
      "Sector Quinario",
      "Sector Terciario"
    ],
    correct: [2],
    explanation: "Anotación UV: Agrupa servicios con modelos propios de gran protagonismo social como la cultura y la sanidad. (Nota sobre Sector Terciario: aunque son servicios, en el esquema moderno de 5 sectores se los especializa en el nivel quinario para diferenciarlos de los servicios comerciales básicos)."
  },
  {
    id: 14,
    type: "single",
    text: "En el mercado se produce una situación de \"escasez\" o exceso de demanda cuando:",
    options: [
      "El precio vigente es superior al punto de intersección de la oferta y la demanda",
      "El gobierno establece un precio mínimo por encima del nivel de equilibrio",
      "La cantidad ofrecida excede la cantidad demandada por los consumidores",
      "El precio vigente en el mercado es inferior al precio de equilibrio"
    ],
    correct: [3],
    explanation: "Anotación UV: A un precio bajo los consumidores desean comprar más de lo que los productores están dispuestos a vender (Qd > Qo). (Nota: cuando la cantidad ofrecida excede a la demandada se trata de excedente, no de escasez)."
  },
  {
    id: 15,
    type: "single",
    text: "Un \"Precio Máximo\" establecido por el gobierno sólo será relevante y generará distorsiones (como escasez) si:",
    options: [
      "Se sitúa por debajo del precio de equilibrio del mercado",
      "La demanda del bien es perfectamente inelástica",
      "Es superior al precio que fijaría libremente el mercado",
      "Se establece exactamente en el punto de intersección de la oferta y la demanda"
    ],
    correct: [0],
    explanation: "Anotación UV: Si el tope está debajo del equilibrio impide que el precio suba para igualar la oferta y la demanda, creando un déficit del producto. (Nota: si el máximo está más arriba del equilibrio no tiene efecto porque el mercado tiende naturalmente a un precio menor)."
  },
  {
    id: 16,
    type: "single",
    text: "¿Cómo se define etimológicamente la palabra economía?",
    options: [
      "Distribución legal de los bienes públicos",
      "Estudio de la riqueza de las naciones",
      "Gobierno de los recursos escasos",
      "Administración de la casa o hábitat"
    ],
    correct: [3],
    explanation: "Respuesta correcta UV: Administración de la casa o hábitat (del griego oikonomía)."
  },
  {
    id: 17,
    type: "single",
    text: "¿Cuál es la remuneración correspondiente al factor de producción \"Capital\"?",
    options: [
      "Interés",
      "Salario",
      "Renta",
      "Beneficio"
    ],
    correct: [0],
    explanation: "Anotación UV: El interés es el pago por el uso del capital invertido en el proceso productivo. (Nota: la renta es la remuneración del factor tierra o recursos naturales)."
  },
  {
    id: 18,
    type: "single",
    text: "En el corto plazo, si una empresa incrementa su producción, ¿qué ocurre con el costo fijo medio?",
    options: [
      "Aumenta debido a la ley de rendimientos crecientes",
      "Permanece constante",
      "Es igual al costo marginal",
      "Disminuye a medida que aumenta la producción"
    ],
    correct: [3],
    explanation: "Anotación UV: Correcto, ya que se distribuye a prorrata entre mayor cantidad de unidades de producto."
  },
  {
    id: 19,
    type: "single",
    text: "Un mercado de oligopolio se caracteriza por:",
    options: [
      "La existencia de pocos oferentes que tienen poder para influir en el precio",
      "La ausencia de barreras de entrada al mercado",
      "La homogeneidad del producto y la transparencia informativa",
      "La presencia de un único vendedor que controla la oferta"
    ],
    correct: [0],
    explanation: "Respuesta correcta UV: La existencia de pocos oferentes que tienen poder para influir en el precio."
  },
  {
    id: 20,
    type: "single",
    text: "Si una economía produce en un punto situado por debajo de su FPP, se puede afirmar que:",
    options: [
      "Alcanzó el pleno empleo de sus factores de producción",
      "La combinación de bienes es inalcanzable",
      "El punto máximo representa el costo de oportunidad",
      "Es ineficiente y está desperdiciando recursos"
    ],
    correct: [3],
    explanation: "Anotación UV: Correcto, NO se encuentra en pleno empleo de sus factores de producción."
  },
  {
    id: 21,
    type: "single",
    text: "Dentro de la clasificación de necesidades de Maslow, ¿en qué nivel se encuentran la alimentación y el descanso?",
    options: [
      "Necesidades fisiológicas",
      "Autorrealización",
      "Estima",
      "Seguridad"
    ],
    correct: [0],
    explanation: "Anotación UV: Son necesidades primarias indispensables para la supervivencia biológica del ser humano."
  },
  {
    id: 22,
    type: "single",
    text: "¿Qué efecto tiene una mejora tecnológica en la curva de Oferta de una empresa?",
    options: [
      "Desplaza la curva de oferta hacia la derecha, permitiendo ofrecer más cantidad al mismo precio",
      "Desplaza la curva de oferta hacia la izquierda debido al aumento inicial en la inversión de capital",
      "Produce un movimiento ascendente a lo largo de la misma curva de oferta",
      "No tiene impacto en la oferta, solo afecta la demanda al crear nuevas necesidades"
    ],
    correct: [0],
    explanation: "Anotación UV: La tecnología aumenta la eficiencia, reduciendo los costos unitarios y permitiendo al productor estar disponible a vender más en cada nivel de precio."
  },
  {
    id: 23,
    type: "single",
    text: "Si al aumentar el precio del bien Y, la demanda del bien X disminuye, entonces la elasticidad cruzada es negativa y los bienes son:",
    options: [
      "Independientes",
      "Complementarios",
      "Sustitutos",
      "Bienes de Giffen",
      "Públicos"
    ],
    correct: [1],
    explanation: "Anotación UV: Los bienes complementarios se consumen juntos; si uno se encarece, el consumo del par se reduce simultáneamente."
  },
  {
    id: 24,
    type: "single",
    text: "Si la elasticidad precio de la demanda de un producto es igual a 0,25, se dice que la demanda es:",
    options: [
      "Elástica, puesto que los consumidores reaccionan de forma exagerada ante cualquier cambio",
      "Unitaria, por lo que un aumento del 10% en el precio reduce la cantidad en un 10%",
      "Perfectamente elástica, puesto que los consumidores reaccionarían de forma exagerada ante cualquier cambio",
      "Inelástica, lo que significa que la cantidad demandada es poco sensible a las variaciones del precio"
    ],
    correct: [3],
    explanation: "Anotación UV: Cuando la elasticidad precio es menor que 1, el cambio porcentual en la cantidad es menor que el cambio porcentual en el precio. (Nota: la demanda elástica requiere un coeficiente mayor a uno, indicando alta sensibilidad)."
  },
  {
    id: 25,
    type: "single",
    text: "¿Qué representa el óptimo de explotación para una empresa?",
    options: [
      "El nivel donde los ingresos totales igualan a los costos variables",
      "El nivel de producción donde el Costo medio es mínimo",
      "El nivel de producción que maximiza el beneficio total",
      "El punto donde el producto marginal es igual al producto medio"
    ],
    correct: [1],
    explanation: "Anotación UV: Correcto, se relaciona con los costos, no sólo con el nivel de producción, sino con aquel punto donde los costos unitarios (CMe) son mínimos."
  }
];

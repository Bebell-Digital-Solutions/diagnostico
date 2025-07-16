
document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS DE LA APLICACIÓN ---

    const CAPITULOS = [
        { id: 1, title: 'Empieza Aquí', description: 'Tu guía inicial para la plataforma Synergy, explicando su propósito, navegación y una visión general de todas las secciones poderosas disponibles para ti.', keywords: 'Plataforma, Onboarding, Guía, Bienvenida, Introducción, Navegación, Características, Primeros Pasos.' },
        { id: 2, title: 'Centro de Organización', description: 'Todo lo que necesitas para estructurar las operaciones de tu negocio, definir roles, flujos de trabajo y construir una base sólida para el crecimiento.', keywords: 'Estructura de Negocio, Operaciones, Equipo, Roles, Flujo de Trabajo, Gestión, Planificación, Eficiencia, SOPs.' },
        { id: 3, title: 'Centro de Productividad', description: 'Recursos y estrategias enfocados en maximizar tu tiempo, gestionar tareas eficazmente, reducir distracciones y mejorar la productividad personal y empresarial.', keywords: 'Productividad, Gestión del Tiempo, Gestión de Tareas, Eficiencia, Enfoque, Flujo de Trabajo, Organización, Metas.' },
        { id: 4, title: 'Centro de Privacidad y Precaución', description: 'Recursos esenciales sobre privacidad de datos, mejores prácticas de seguridad y precauciones necesarias para proteger tu negocio y clientes en línea.', keywords: 'Privacidad de Datos, Seguridad, GDPR, CCPA, Cumplimiento, Protección, Seguridad en Línea, Gestión de Riesgos.' },
        { id: 5, title: 'Centro de Exploración', description: 'Un espacio para descubrir nuevos modelos de negocio, tendencias de mercado, tecnologías emergentes y casos de estudio inspiradores para fomentar la innovación.', keywords: 'Tendencias, Innovación, Modelos de Negocio, Tecnología, Exploración de Mercado, Inspiración, Oportunidades.' },
        { id: 6, title: 'Centro de Investigación de Mercado', description: 'Herramientas y guías para entender a tu público objetivo, analizar competidores, identificar brechas de mercado y validar ideas de negocio.', keywords: 'Análisis de Mercado, Investigación de Competidores, Público Objetivo, Insights de Clientes, Validación.' },
        { id: 7, title: 'Centro Financiero', description: 'Recursos para planificación financiera, presupuestos, opciones de financiación, entender estados financieros y gestionar las finanzas del negocio eficazmente.', keywords: 'Finanzas, Presupuesto, Financiación, Planificación Financiera, Contabilidad, Ganancias, Gastos, Ingresos, Flujo de Caja.' },
        { id: 8, title: 'Centro de Identidad Comercial', description: 'Desarrolla tu identidad de marca, crea propuestas de valor convincentes, diseña logos y activos visuales, y establece una presencia de marca memorable.', keywords: 'Branding, Identidad de Marca, Logo, Visuales, Propuesta de Valor, Posicionamiento, Storytelling.' },
        { id: 9, title: 'Centro de Protección y Cumplimiento', description: 'Información sobre requisitos legales, registros, protección de propiedad intelectual, y cómo navegar el panorama regulatorio para negocios en línea.', keywords: 'Legal, Cumplimiento, Regulaciones, Propiedad Intelectual, Registros, Licencias, Contratos.' },
        { id: 10, title: 'Centro de Billetera Digital', description: 'Guía para configurar y gestionar sistemas de pago digitales, billeteras en línea y procesar transacciones de forma segura.', keywords: 'Pagos, Billetera Digital, Transacciones en Línea, Pasarelas de Pago, E-commerce.' },
        { id: 11, title: 'Centro de Marketing Digital', description: 'Recursos sobre SEO, marketing en redes sociales, marketing de contenidos, email marketing, publicidad pagada y construcción de campañas efectivas.', keywords: 'SEO, SEM, Redes Sociales, Marketing de Contenidos, Email Marketing, PPC, Publicidad.' },
        { id: 12, title: 'Centro de Compras y Ventas', description: 'Herramientas para gestionar proveedores, optimizar procesos de compra, configurar embudos de venta, y manejar operaciones de e-commerce.', keywords: 'Ventas, Compras, E-commerce, CRM, Embudo de Ventas, Proveedores, Gestión de Pedidos, Inventario.' },
        { id: 13, title: 'Centro de Presencia Online', description: 'Guía para construir sitios web, elegir plataformas (ej. Shopify, WordPress), optimizar la experiencia de usuario (UX) y crear una fuerte huella digital.', keywords: 'Sitio Web, E-commerce, UX/UI, Desarrollo Web, Hosting, Dominio, Página de Aterrizaje.' },
        { id: 14, title: 'Centro de Comunicación', description: 'Estrategias y herramientas para una comunicación interna y externa efectiva, incluyendo comunicación con clientes y colaboración de equipo.', keywords: 'Comunicación, Comunicación con Clientes, Colaboración de Equipo, Mensajería.' },
        { id: 15, title: 'Centro de Servicio al Cliente', description: 'Mejores prácticas para ofrecer un soporte al cliente excepcional, configurar mesas de ayuda, gestionar consultas y construir relaciones duraderas.', keywords: 'Soporte al Cliente, Help Desk, CRM, Relación con el Cliente, Retención, Satisfacción.' },
        { id: 16, title: 'Centro de Creación de Contenido', description: 'Recursos para planificar, crear y distribuir contenido atractivo en diversos formatos (texto, imágenes, video, audio) para atraer a tu audiencia.', keywords: 'Marketing de Contenidos, Copywriting, Blogging, Producción de Video, Diseño Gráfico, Podcasts.' },
        { id: 17, title: 'Centro de Datos y Analítica', description: 'Aprende a recolectar, analizar e interpretar datos de negocio para obtener insights y tomar decisiones basadas en datos.', keywords: 'Análisis de Datos, Analítica, Reportes, Métricas, KPIs, Business Intelligence, Decisiones Basadas en Datos.' },
        { id: 18, title: 'Centro de Automatizaciones', description: 'Explora herramientas y estrategias para automatizar tareas repetitivas en marketing, ventas y operaciones para ahorrar tiempo y mejorar la eficiencia.', keywords: 'Automatización, Flujo de Trabajo, Automatización de Marketing, Eficiencia, Productividad.' },
        { id: 19, title: 'Centro de Optimización', description: 'Técnicas y herramientas para mejorar continuamente el rendimiento de tu sitio web, tasas de conversión, campañas de marketing y procesos operativos.', keywords: 'Optimización, CRO, Rendimiento, Pruebas A/B, Mejora de Procesos, Experiencia de Usuario (UX).' },
        { id: 20, title: 'Centro de Formalización', description: 'Guía sobre los pasos necesarios para formalizar legalmente tu negocio, incluyendo la elección de una estructura empresarial y procesos de registro.', keywords: 'Registro de Negocio, Estructura Legal, Incorporación, Permisos, Licencias, Formalidades.' },
        { id: 21, title: 'Centro de Contabilidad', description: 'Conocimientos esenciales sobre contabilidad, gestión de gastos, facturación, obligaciones fiscales y uso de software contable.', keywords: 'Contabilidad, Facturación, Gastos, Impuestos, Registros Financieros, Software de Gestión.' },
        { id: 22, title: 'Centro de Inversión', description: 'Recursos sobre cómo atraer inversiones, crear pitch decks, entender la valoración y explorar diferentes vías de financiación para escalar tu negocio.', keywords: 'Inversión, Recaudación de Fondos, Pitch Deck, Valoración, Venture Capital, Inversores Ángeles.' },
        { id: 23, title: 'Directorio de Herramientas', description: 'Una lista curada y reseñas de herramientas de terceros recomendadas que pueden complementar tus esfuerzos en diversas áreas de negocio.', keywords: 'Herramientas, Software, Aplicaciones, Recursos, Directorio, Recomendaciones.' },
        { id: 24, title: 'Centro de Soporte de IA', description: 'Aprende a aprovechar herramientas y tecnologías de IA para mejorar aspectos de tu negocio, desde la generación de contenido hasta el análisis de datos.', keywords: 'Inteligencia Artificial, Herramientas de IA, Machine Learning, Automatización con IA, Soporte de IA.' },
    ];

    const NIVELES_PROGRESO = [
      { valor: 0, nombre: 'None', descripcion: 'Nunca lo he empezado', color: '#f44336' },
      { valor: 1, nombre: 'Beginner', descripcion: 'Estoy empezando', color: '#ffc107' },
      { valor: 2, nombre: 'Pro', descripcion: 'Lo he trabajado pero necesita optimización', color: '#2196f3' },
      { valor: 3, nombre: 'Certified', descripcion: 'Ya está listo, no necesito ayuda', color: '#4caf50' },
    ];

    // --- ESTADO DE LA APLICACIÓN ---
    let respuestas = {};
    let chartInstance = null;
    
    // --- ELEMENTOS DEL DOM ---
    const chaptersGrid = document.getElementById('chapters-grid');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const formView = document.getElementById('form-view');
    const reportView = document.getElementById('report-view');
    const generateReportBtn = document.getElementById('generate-report-btn');
    const backToFormBtn = document.getElementById('back-to-form-btn');
    const downloadPdfBtn = document.getElementById('download-pdf-btn');
    const formError = document.getElementById('form-error');
    const themeToggle = document.getElementById('theme-toggle-checkbox');


    // --- FUNCIONES PRINCIPALES ---

    function inicializar() {
        cargarRespuestas();
        renderizarFormulario();
        actualizarProgreso();
        configurarEventListeners();
        configurarTema();
    }
    
    function configurarEventListeners() {
        generateReportBtn.addEventListener('click', manejarGeneracionReporte);
        backToFormBtn.addEventListener('click', mostrarVistaFormulario);
        downloadPdfBtn.addEventListener('click', descargarPDF);
        themeToggle.addEventListener('change', cambiarTema);
    }
    
    function configurarTema() {
        const temaGuardado = localStorage.getItem('theme') || 'light';
        document.documentElement.className = temaGuardado;
        themeToggle.checked = temaGuardado === 'dark';
    }
    
    function cambiarTema() {
        const temaActual = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.className = temaActual;
        localStorage.setItem('theme', temaActual);
        // Re-renderizar el gráfico si está visible para que se adapte al nuevo tema
        if (!reportView.style.display) {
            renderizarGrafico();
        }
    }

    function renderizarFormulario() {
        chaptersGrid.innerHTML = '';
        CAPITULOS.forEach(cap => {
            const nivelActual = respuestas[cap.id] || 0;
            const card = document.createElement('div');
            card.className = 'chapter-card';
            card.innerHTML = `
                <div>
                    <h3>${cap.id}. ${cap.title}</h3>
                    <p class="description">${cap.description}</p>
                </div>
                <div class="options-container">
                    <p class="options-label">¿Cuál es tu nivel de progreso actual?</p>
                    <div class="options-group" data-chapter-id="${cap.id}">
                        ${NIVELES_PROGRESO.map(nivel => `
                            <label class="radio-label ${nivelActual === nivel.valor ? 'selected' : ''}">
                                <input type="radio" name="chapter-${cap.id}" value="${nivel.valor}" ${nivelActual === nivel.valor ? 'checked' : ''}>
                                <span class="custom-radio"><span class="dot"></span></span>
                                <span class="radio-text">${nivel.descripcion}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
            chaptersGrid.appendChild(card);
        });

        chaptersGrid.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                const chapterId = e.target.closest('.options-group').dataset.chapterId;
                const level = parseInt(e.target.value, 10);
                
                // Actualizar estado visual
                e.target.closest('.options-group').querySelectorAll('.radio-label').forEach(label => {
                    label.classList.remove('selected');
                });
                e.target.parentElement.classList.add('selected');

                manejarCambioRespuesta(parseInt(chapterId), level);
            }
        });
    }

    function manejarCambioRespuesta(chapterId, level) {
        respuestas[chapterId] = level;
        guardarRespuestas();
        actualizarProgreso();
    }

    function actualizarProgreso() {
        const respondidos = Object.keys(respuestas).filter(key => respuestas[key] !== null && respuestas[key] !== undefined).length;
        const total = CAPITULOS.length;
        const porcentaje = total > 0 ? (respondidos / total) * 100 : 0;
        
        progressBar.style.width = `${porcentaje}%`;
        progressPercentage.textContent = `${Math.round(porcentaje)}%`;
    }
    
    function manejarGeneracionReporte() {
        if (Object.keys(respuestas).length === 0) {
            formError.textContent = "Por favor, evalúa al menos un capítulo para generar el reporte.";
            setTimeout(() => { formError.textContent = "" }, 3000);
            return;
        }
        formError.textContent = "";
        renderizarReporte();
        mostrarVistaReporte();
    }

    function renderizarReporte() {
        renderizarGrafico();
        renderizarResumenRespuestas();
        renderizarPlanDeAccion();
        
        document.getElementById('report-date').textContent = new Date().toLocaleDateString('es-ES');
        document.getElementById('current-year').textContent = new Date().getFullYear();
    }

    function renderizarGrafico() {
        const ctx = document.getElementById('results-chart').getContext('2d');
        const datosGrafico = CAPITULOS.map(cap => ({
            puntuacion: respuestas[cap.id] || 0,
            color: (NIVELES_PROGRESO.find(n => n.valor === (respuestas[cap.id] || 0)) || {}).color || '#cccccc'
        }));
        
        const esTemaOscuro = document.documentElement.classList.contains('dark');
        const colorTexto = esTemaOscuro ? '#f9fafb' : '#1f2937';
        const colorGrid = esTemaOscuro ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: CAPITULOS.map(cap => `Cap. ${cap.id}`),
                datasets: [{
                    label: 'Puntuación',
                    data: datosGrafico.map(d => d.puntuacion),
                    backgroundColor: datosGrafico.map(d => d.color),
                    borderColor: datosGrafico.map(d => d.color),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 3,
                        ticks: {
                            stepSize: 1,
                            color: colorTexto
                        },
                        grid: { color: colorGrid }
                    },
                    x: {
                        ticks: { color: colorTexto },
                        grid: { color: colorGrid }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const capIndex = context.dataIndex;
                                const capitulo = CAPITULOS[capIndex];
                                const puntuacion = context.raw;
                                const nivel = NIVELES_PROGRESO.find(n => n.valor === puntuacion).nombre;
                                return `${capitulo.title}: ${puntuacion} (${nivel})`;
                            }
                        }
                    }
                }
            }
        });
    }
    
    function renderizarResumenRespuestas() {
        const summaryContainer = document.getElementById('answers-summary');
        summaryContainer.innerHTML = '';
        CAPITULOS.forEach(cap => {
            const nivelValor = respuestas[cap.id] || 0;
            const nivelInfo = NIVELES_PROGRESO.find(n => n.valor === nivelValor);
            
            const item = document.createElement('div');
            item.className = 'answer-item';
            item.innerHTML = `
                <span class="color-dot" style="background-color: ${nivelInfo.color};"></span>
                <div class="answer-item-text">
                    <p class="title">${cap.title}</p>
                    <p class="level">${nivelInfo.descripcion}</p>
                </div>
            `;
            summaryContainer.appendChild(item);
        });
    }

    function renderizarPlanDeAccion() {
        const planContainer = document.getElementById('ai-plan-content');
        const { retos, habilidades, recomendaciones, felicitaciones } = generarPlanDeAccion();

        let html = '';

        if (retos.length > 0) {
            html += `<h4>Retos a Superar</h4><p>Estas son las áreas críticas en las que debes enfocar tu energía para construir una base sólida:</p><ul>${retos.map(r => `<li><strong>${r}:</strong> Prioriza esta área para desbloquear tu potencial.</li>`).join('')}</ul>`;
        }
        if (habilidades.length > 0) {
            html += `<h4>Habilidades por Desarrollar</h4><p>Para seguir avanzando, te recomendamos desarrollar estas habilidades clave:</p><ul>${habilidades.map(h => `<li><strong>${h}:</strong> Profundiza en este tema para mejorar tus resultados.</li>`).join('')}</ul>`;
        }
        if (recomendaciones.length > 0) {
            html += `<h4>Sugerencias de Optimización</h4><p>Has hecho un gran trabajo. Considera estas acciones para optimizar y escalar:</p><ul>${recomendaciones.map(r => `<li><strong>${r}:</strong> Busca formas de mejorar la eficiencia y el impacto en esta área.</li>`).join('')}</ul>`;
        }
        if (felicitaciones.length > 0) {
            html += `<h4>¡Excelente Trabajo!</h4><p>Has dominado estas áreas. ¡Sigue así!</p><ul>${felicitaciones.map(f => `<li><strong>${f}</strong></li>`).join('')}</ul>`;
        }

        planContainer.innerHTML = html;
    }

    function generarPlanDeAccion() {
        const retos = [], habilidades = [], recomendaciones = [], felicitaciones = [];
        CAPITULOS.forEach(cap => {
            const nivel = respuestas[cap.id] || 0;
            switch(nivel) {
                case 0: retos.push(cap.title); break;
                case 1: habilidades.push(cap.title); break;
                case 2: recomendaciones.push(cap.title); break;
                case 3: felicitaciones.push(cap.title); break;
            }
        });
        return { retos, habilidades, recomendaciones, felicitaciones };
    }
    
    function descargarPDF() {
        const reportContent = document.getElementById('report-content');
        const options = {
            margin: [15, 15, 15, 15],
            filename: 'Diagnostico-Negocio-Digital.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Usar html2pdf para generar el PDF del elemento
        html2pdf().from(reportContent).set(options).save();
    }
    
    // --- MANEJO DE VISTAS ---
    function mostrarVistaFormulario() {
        reportView.style.display = 'none';
        formView.style.display = 'block';
    }

    function mostrarVistaReporte() {
        formView.style.display = 'none';
        reportView.style.display = 'block';
        window.scrollTo(0, 0);
    }

    // --- LOCALSTORAGE ---
    function guardarRespuestas() {
        localStorage.setItem('diagnosticAnswers', JSON.stringify(respuestas));
    }

    function cargarRespuestas() {
        const guardado = localStorage.getItem('diagnosticAnswers');
        if (guardado) {
            respuestas = JSON.parse(guardado);
        } else {
            // Inicializar con todos los capítulos en 0
            respuestas = CAPITULOS.reduce((acc, cap) => {
                acc[cap.id] = 0;
                return acc;
            }, {});
        }
    }

    // --- INICIAR APP ---
    inicializar();
});

// Goal templates database
const goalTemplates = {
    "General Developer": {
        "0-2 years": {
            "Startup": [
                "Successfully complete onboarding training and contribute to at least two sprint features with minimal supervision.",
                "Master the team's coding standards and implement them consistently in your work.",
                "Actively participate in code reviews to improve code quality and your understanding of the codebase.",
                "Build proficiency in at least one of the company's core technologies or frameworks.",
                "Collaborate effectively with team members by asking meaningful questions and incorporating feedback."
            ],
            "Small": [
                "Complete assigned tasks within sprint deadlines with increasing independence.",
                "Learn and apply the company's development processes and best practices consistently.",
                "Contribute to at least one feature that delivers customer value each quarter.",
                "Actively participate in team meetings with relevant insights and questions.",
                "Develop foundational knowledge in the company's technology stack and business domain."
            ],
            "Medium": [
                "Master the development workflow and tools used by the team.",
                "Complete assigned tasks with minimal rework and growing independence.",
                "Develop understanding of the company's products and how your work contributes to them.",
                "Identify and resolve basic bugs independently.",
                "Document your code according to team standards."
            ],
            "Large": [
                "Complete the company's formal onboarding program with all certifications.",
                "Learn to navigate the company's development ecosystem and tools effectively.",
                "Successfully deliver assigned tasks within established quality standards.",
                "Actively engage in team knowledge-sharing sessions.",
                "Understand and adhere to company security and compliance requirements."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Take ownership of small features from design to implementation.",
                "Mentor new team members on codebase and development practices.",
                "Propose and implement at least one process improvement for the team.",
                "Contribute to technical discussions with actionable suggestions.",
                "Build expertise in one of the company's critical technology areas."
            ],
            "Small": [
                "Lead the implementation of small to medium features with minimal supervision.",
                "Participate in technical design discussions with substantive contributions.",
                "Help onboard new team members effectively.",
                "Identify and proactively address technical debt in your area of work.",
                "Take on-call rotation responsibilities and respond effectively to incidents."
            ],
            "Medium": [
                "Take ownership of medium-sized features from conception to deployment.",
                "Contribute to improving team processes and code quality.",
                "Begin mentoring junior developers in your area of expertise.",
                "Write comprehensive technical documentation for features you implement.",
                "Participate effectively in cross-team coordination."
            ],
            "Large": [
                "Successfully deliver assigned projects within established timelines.",
                "Collaborate effectively across team boundaries to resolve dependencies.",
                "Provide meaningful code reviews that improve code quality.",
                "Contribute to knowledge sharing within your team.",
                "Understand and explain how your work aligns with department goals."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Build and implement architectural components that address current and future business needs.",
                "Provide technical guidance to junior team members.",
                "Lead the implementation of at least one major feature.",
                "Contribute to hiring and team growth through interviews and assessments.",
                "Help define coding standards and best practices."
            ],
            "Small": [
                "Take ownership of complex technical problems from identification to resolution.",
                "Mentor junior developers and provide timely feedback on their progress.",
                "Lead the design and implementation of key features or systems.",
                "Contribute to architecture decisions that improve the product's scalability and maintainability.",
                "Participate in planning sessions with meaningful technical insights."
            ],
            "Medium": [
                "Lead design and implementation of significant features or components.",
                "Mentor junior developers through pair programming and code reviews.",
                "Contribute to architectural decisions and technical strategy.",
                "Identify and resolve complex technical issues across multiple components.",
                "Collaborate with product management to refine technical requirements."
            ],
            "Large": [
                "Lead development efforts for key initiatives within the team.",
                "Mentor junior team members and help them grow technically.",
                "Drive improvements in code quality, performance, and reliability.",
                "Contribute to technical design reviews across team boundaries.",
                "Effectively communicate technical concepts to non-technical stakeholders."
            ]
        },
        "10+ years": {
            "Startup": [
                "Architect and implement scalable solutions that support the company's growth trajectory.",
                "Establish technical standards and ensure adherence across the engineering team.",
                "Mentor and develop technical talent within the organization.",
                "Drive innovation by researching and implementing new technologies.",
                "Contribute to strategic technical decisions at the company level."
            ],
            "Small": [
                "Lead the technical direction for major product initiatives.",
                "Mentor and develop the skills of mid-level and senior developers.",
                "Drive architectural improvements that address technical debt and scalability.",
                "Collaborate with leadership to align technical strategy with business goals.",
                "Establish and maintain engineering best practices across teams."
            ],
            "Medium": [
                "Lead architectural decisions for significant product areas.",
                "Mentor and develop senior engineers on the team.",
                "Drive continuous improvement in engineering practices and processes.",
                "Represent the technical perspective in product strategy discussions.",
                "Resolve complex technical challenges that span multiple systems."
            ],
            "Large": [
                "Lead architectural decisions for significant initiatives.",
                "Drive adoption of engineering best practices across multiple teams.",
                "Mentor senior engineers and help develop the next generation of technical leaders.",
                "Collaborate with product and business leaders to align technical strategy with company goals.",
                "Identify and champion strategic technical improvements with company-wide impact."
            ]
        }
    },
    "Tech Lead": {
        "0-2 years": {
            "Startup": [
                "Lead the technical design and implementation of major features.",
                "Guide team members in technical decisions and career growth.",
                "Drive improvements in development processes and code quality.",
                "Collaborate with product managers to refine roadmap based on technical constraints.",
                "Balance technical debt management with feature delivery."
            ],
            "Small": [
                "Lead technical design and implementation for a product area or feature set.",
                "Mentor team members and help improve their technical capabilities.",
                "Drive adoption of engineering best practices within your team.",
                "Collaborate with product management to define technical requirements.",
                "Ensure the team delivers high-quality code on schedule."
            ],
            "Medium": [
                "Lead technical planning and execution for a development team.",
                "Mentor team members and provide career guidance.",
                "Drive improvements in development processes and code quality.",
                "Collaborate with product management to define feature requirements.",
                "Manage technical debt while delivering product features on schedule."
            ],
            "Large": [
                "Lead technical implementation for a specific product area or feature set.",
                "Mentor team members and provide technical guidance.",
                "Ensure code quality through effective code reviews and standards.",
                "Collaborate with product management to refine requirements.",
                "Manage dependencies with other teams to deliver features on schedule."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Architect and lead development of major product initiatives.",
                "Build and grow a high-performing engineering team.",
                "Drive technical excellence through best practices and processes.",
                "Collaborate with leadership on product strategy and roadmap planning.",
                "Balance technical debt against feature delivery and market needs."
            ],
            "Small": [
                "Lead the technical strategy and implementation for a major product area.",
                "Develop team members through mentoring and career guidance.",
                "Drive architectural improvements that enable product scalability.",
                "Collaborate with product and business leaders on roadmap planning.",
                "Ensure timely delivery of features while maintaining code quality."
            ],
            "Medium": [
                "Lead the technical direction and architecture for a development team.",
                "Develop team members through mentoring and career guidance.",
                "Drive adoption of engineering best practices across the team.",
                "Collaborate with product management on roadmap planning and prioritization.",
                "Manage technical dependencies across teams to deliver complex features."
            ],
            "Large": [
                "Lead technical architecture and implementation for a significant product area.",
                "Develop team members through consistent mentorship and feedback.",
                "Drive adoption of engineering best practices within your team.",
                "Collaborate with product and other engineering teams on complex initiatives.",
                "Balance feature delivery against technical debt and quality considerations."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Define and implement technical strategy across multiple product areas.",
                "Build and lead multiple engineering teams with a focus on quality and velocity.",
                "Drive architectural decisions that support the company's growth trajectory.",
                "Mentor technical leaders and develop leadership capabilities.",
                "Contribute to company strategy and product direction."
            ],
            "Small": [
                "Lead technical strategy and implementation across multiple teams.",
                "Develop technical leaders through mentorship and career guidance.",
                "Drive architectural governance that ensures product quality and scalability.",
                "Collaborate with executive leadership on strategic initiatives.",
                "Balance team resources across maintenance, technical debt, and new features."
            ],
            "Medium": [
                "Lead technical strategy and architecture for a major product domain.",
                "Develop technical leaders through structured mentorship programs.",
                "Drive engineering excellence across multiple teams or departments.",
                "Collaborate with product leadership on strategic roadmap planning.",
                "Manage resources effectively across maintenance and new development."
            ],
            "Large": [
                "Lead technical strategy and architecture for a major product area.",
                "Develop leadership capabilities in senior engineers and managers.",
                "Drive engineering excellence through standardization and best practices.",
                "Collaborate with product and business leaders on strategic initiatives.",
                "Balance resources across maintenance, technical debt, and new features."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define the company's technical vision and architectural principles.",
                "Build and lead the engineering organization through rapid growth phases.",
                "Drive technical innovation that creates competitive advantage.",
                "Develop engineering leaders and establish succession planning.",
                "Collaborate with executive leadership on company strategy and vision."
            ],
            "Small": [
                "Define and implement technical strategy across the engineering organization.",
                "Develop engineering leaders through mentorship and organizational structure.",
                "Drive architectural governance and standards across all products.",
                "Collaborate with executive leadership on company strategy.",
                "Balance innovation with stability across the product portfolio."
            ],
            "Medium": [
                "Define technical vision and strategy across multiple product domains.",
                "Develop engineering leaders through structured leadership programs.",
                "Drive architectural governance that ensures product quality and scalability.",
                "Collaborate with executive leadership on strategic business initiatives.",
                "Balance innovation with stability across the engineering organization."
            ],
            "Large": [
                "Define technical vision and strategy for major organizational divisions.",
                "Develop engineering leadership capabilities across multiple teams.",
                "Drive architectural governance that ensures consistency and quality.",
                "Collaborate with executive leadership on strategic business initiatives.",
                "Balance innovation with reliability across large product portfolios."
            ]
        }
    },
    "Frontend Engineer": {
        "0-2 years": {
            "Startup": [
                "Implement responsive UI components according to design specifications.",
                "Improve frontend performance metrics such as load time and rendering efficiency.",
                "Ensure cross-browser compatibility for all implemented features.",
                "Learn and apply modern frontend frameworks and tools effectively.",
                "Collaborate with designers to implement pixel-perfect UIs."
            ],
            "Small": [
                "Develop reusable UI components that follow design system guidelines.",
                "Improve application performance through optimization techniques.",
                "Ensure cross-browser and cross-device compatibility for all features.",
                "Master the team's frontend framework and component architecture.",
                "Collaborate effectively with designers to implement UI requirements."
            ],
            "Medium": [
                "Create responsive UI components according to established design system.",
                "Implement accessibility features for key user flows.",
                "Optimize component rendering performance across supported browsers.",
                "Master the company's frontend framework and component library.",
                "Collaborate effectively with designers and backend engineers."
            ],
            "Large": [
                "Implement UI components according to the company's design system standards.",
                "Ensure accessibility compliance for assigned features.",
                "Write comprehensive unit tests for UI components.",
                "Learn and apply the company's frontend architecture patterns.",
                "Collaborate effectively with design and backend teams."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Design and implement complex UI features with optimal performance.",
                "Establish frontend testing standards and increase test coverage.",
                "Lead UI/UX improvements that enhance user engagement metrics.",
                "Propose and implement frontend architecture improvements.",
                "Mentor junior frontend developers and review their code."
            ],
            "Small": [
                "Lead development of complex UI features or sections of the product.",
                "Establish and enforce frontend testing standards.",
                "Implement advanced performance optimizations for critical user flows.",
                "Contribute to the company's design system and component library.",
                "Mentor junior frontend developers through code reviews and pairing."
            ],
            "Medium": [
                "Design and implement complex frontend features or application sections.",
                "Lead frontend testing strategy and increase test coverage.",
                "Optimize application performance in key user journeys.",
                "Contribute to the evolution of the frontend architecture.",
                "Mentor junior developers through code reviews and knowledge sharing."
            ],
            "Large": [
                "Lead implementation of significant frontend features or components.",
                "Drive improvements in frontend testing coverage and strategies.",
                "Optimize performance for critical user flows.",
                "Contribute to the company's design system and component library.",
                "Mentor junior frontend developers through structured guidance."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Architect frontend solutions that scale with business growth.",
                "Establish frontend best practices and coding standards.",
                "Lead performance optimization initiatives across the application.",
                "Drive accessibility compliance throughout the product.",
                "Mentor and develop frontend engineering talent."
            ],
            "Small": [
                "Design frontend architecture that supports product scalability.",
                "Lead frontend performance and accessibility initiatives.",
                "Establish and maintain frontend development standards.",
                "Mentor mid-level and junior frontend developers.",
                "Collaborate with product leaders on technical feasibility and implementation strategies."
            ],
            "Medium": [
                "Lead frontend architecture decisions for major product areas.",
                "Drive initiatives to improve performance, accessibility, and user experience.",
                "Establish frontend development standards and best practices.",
                "Mentor senior and mid-level frontend developers.",
                "Collaborate with product and design leaders on strategic initiatives."
            ],
            "Large": [
                "Lead frontend architecture for a significant product area.",
                "Drive adoption of modern frontend technologies and practices.",
                "Lead performance and accessibility initiatives across teams.",
                "Mentor senior frontend engineers and develop technical leaders.",
                "Collaborate across teams to deliver complex frontend solutions."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define the company's frontend technical vision and strategy.",
                "Architect scalable frontend solutions that support rapid growth.",
                "Establish engineering excellence in frontend development practices.",
                "Lead and develop frontend engineering talent across the organization.",
                "Collaborate with executive leadership on product strategy and vision."
            ],
            "Small": [
                "Define frontend architecture strategy across products or platforms.",
                "Establish technical governance for frontend engineering.",
                "Lead initiatives to modernize frontend technology stack.",
                "Mentor frontend engineering leaders and develop succession plans.",
                "Collaborate with executive leadership on technical strategy."
            ],
            "Medium": [
                "Define frontend technical strategy across multiple product areas.",
                "Establish architectural governance for frontend systems.",
                "Lead initiatives to improve frontend performance and user experience at scale.",
                "Develop frontend engineering leaders through mentorship programs.",
                "Collaborate with product and engineering executives on strategic initiatives."
            ],
            "Large": [
                "Define frontend technical vision and strategy for major product areas.",
                "Establish architectural standards and governance for frontend systems.",
                "Drive frontend innovation that enhances user experience at scale.",
                "Develop frontend engineering leaders across multiple teams.",
                "Contribute to technical strategy discussions at executive levels."
            ]
        }
    },

    // Backend Engineer templates
    "Backend Engineer": {
        "0-2 years": {
            "Startup": [
                "Implement API endpoints that meet functional requirements and performance targets.",
                "Design and implement database schemas that support application features.",
                "Write comprehensive unit and integration tests for backend services.",
                "Identify and resolve performance bottlenecks in backend systems.",
                "Document APIs and backend services for team knowledge sharing."
            ],
            "Small": [
                "Develop reliable API endpoints and backend services.",
                "Create efficient database queries and optimized data access patterns.",
                "Implement comprehensive test coverage for backend components.",
                "Contribute to performance improvements in backend systems.",
                "Document backend services according to team standards."
            ],
            "Medium": [
                "Implement backend services according to established architecture patterns.",
                "Create and optimize database queries for performance.",
                "Write comprehensive tests for backend components.",
                "Implement logging and monitoring for assigned services.",
                "Document APIs and backend implementations."
            ],
            "Large": [
                "Implement backend services according to company architecture standards.",
                "Develop efficient database queries and data access patterns.",
                "Create comprehensive test suites for backend components.",
                "Follow established security and compliance guidelines.",
                "Document APIs and backend implementations thoroughly."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Design and implement scalable backend services and APIs.",
                "Optimize database performance and data access patterns.",
                "Lead backend testing strategy and increase test coverage.",
                "Implement observability solutions for system monitoring.",
                "Mentor junior backend developers through code reviews and knowledge sharing."
            ],
            "Small": [
                "Design scalable backend architectures for new features.",
                "Optimize database schemas and queries for performance.",
                "Implement comprehensive monitoring and alerting for critical services.",
                "Lead backend testing initiatives and improve coverage.",
                "Mentor junior backend developers and review their work."
            ],
            "Medium": [
                "Design and implement backend services for complex features.",
                "Optimize database performance for high-volume operations.",
                "Implement robust error handling and recovery mechanisms.",
                "Lead backend testing initiatives within your team.",
                "Mentor junior developers through structured guidance."
            ],
            "Large": [
                "Design and implement backend services that meet scalability requirements.",
                "Optimize database schemas and queries for high-volume operations.",
                "Implement comprehensive monitoring and observability solutions.",
                "Lead backend testing initiatives within your team.",
                "Mentor junior backend developers through code reviews and pairing."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Architect backend systems that scale with business growth.",
                "Design database architecture that supports evolving business needs.",
                "Establish backend development standards and best practices.",
                "Lead performance optimization initiatives across backend services.",
                "Mentor and develop backend engineering talent."
            ],
            "Small": [
                "Design backend architecture that supports product scalability.",
                "Lead database architecture and optimization initiatives.",
                "Establish backend development standards and practices.",
                "Implement infrastructure as code for service deployments.",
                "Mentor mid-level and junior backend developers."
            ],
            "Medium": [
                "Lead backend architecture decisions for major product areas.",
                "Design database solutions that scale with business growth.",
                "Drive initiatives to improve system reliability and performance.",
                "Establish backend development standards and best practices.",
                "Mentor senior and mid-level backend developers."
            ],
            "Large": [
                "Lead backend architecture for significant product domains.",
                "Design distributed systems that meet scalability requirements.",
                "Implement strategies for service reliability and fault tolerance.",
                "Mentor senior backend engineers and develop technical leaders.",
                "Collaborate across teams to deliver complex backend solutions."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define the company's backend technical vision and architecture.",
                "Architect distributed systems that support rapid business growth.",
                "Establish engineering excellence in backend development practices.",
                "Lead and develop backend engineering talent across the organization.",
                "Collaborate with executive leadership on technical strategy."
            ],
            "Small": [
                "Define backend architecture strategy across products or services.",
                "Establish technical governance for backend engineering.",
                "Lead initiatives to modernize backend technology stack.",
                "Mentor backend engineering leaders and develop succession plans.",
                "Collaborate with executive leadership on technical roadmap."
            ],
            "Medium": [
                "Define backend technical strategy across multiple product areas.",
                "Establish architectural governance for backend systems.",
                "Drive initiatives to improve system scalability and reliability at scale.",
                "Develop backend engineering leaders through mentorship programs.",
                "Collaborate with product and engineering executives on strategic initiatives."
            ],
            "Large": [
                "Define backend technical vision and strategy for major product areas.",
                "Establish architectural standards and governance for backend systems.",
                "Drive backend innovation that enhances system scalability and reliability.",
                "Develop backend engineering leaders across multiple teams.",
                "Contribute to technical strategy discussions at executive levels."
            ]
        }
    },

    // Full-Stack Engineer templates
    "Full-Stack Engineer": {
        "0-2 years": {
            "Startup": [
                "Implement end-to-end features that connect UI components with backend services.",
                "Develop responsive UIs that implement design specifications accurately.",
                "Create efficient API endpoints and database queries.",
                "Write cross-stack tests that verify feature functionality.",
                "Contribute to devops practices including CI/CD pipelines."
            ],
            "Small": [
                "Develop end-to-end features across frontend and backend layers.",
                "Implement responsive UI components that match design specifications.",
                "Create efficient API endpoints and database access patterns.",
                "Write comprehensive tests across the stack.",
                "Learn and apply company-wide development standards."
            ],
            "Medium": [
                "Implement features that span frontend and backend systems.",
                "Create UI components according to design system specifications.",
                "Develop API endpoints that follow team's architecture patterns.",
                "Write comprehensive tests across the technology stack.",
                "Learn and apply development standards across all layers."
            ],
            "Large": [
                "Implement full-stack features according to established patterns.",
                "Create UI components that adhere to design system guidelines.",
                "Develop backend services that follow architectural standards.",
                "Write comprehensive tests across frontend and backend.",
                "Follow security and compliance requirements company-wide."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Design and implement complex features across the entire technology stack.",
                "Optimize frontend performance and user experience for critical flows.",
                "Build scalable backend services and efficient database schema.",
                "Lead cross-stack testing and quality initiatives.",
                "Mentor junior engineers on both frontend and backend development."
            ],
            "Small": [
                "Lead development of full-stack features from design to deployment.",
                "Improve frontend performance and user experience metrics.",
                "Design scalable backend services and optimize database queries.",
                "Implement observability across the technology stack.",
                "Mentor junior engineers in cross-stack development."
            ],
            "Medium": [
                "Lead implementation of complex features across frontend and backend.",
                "Design component architectures that enhance code reusability.",
                "Develop scalable services that meet performance requirements.",
                "Implement monitoring and observability across the stack.",
                "Mentor junior engineers in full-stack development practices."
            ],
            "Large": [
                "Lead development of features that span multiple architectural layers.",
                "Design and implement UI components with optimal performance.",
                "Create backend services that integrate with multiple systems.",
                "Implement comprehensive testing across the technology stack.",
                "Mentor junior engineers in cross-stack development practices."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Architect end-to-end solutions that scale with business needs.",
                "Lead development across frontend and backend systems.",
                "Establish engineering standards across the technology stack.",
                "Implement DevOps practices that improve delivery velocity.",
                "Mentor and develop full-stack engineering talent."
            ],
            "Small": [
                "Design full-stack architecture that supports product scalability.",
                "Lead performance optimization initiatives across the stack.",
                "Establish development standards for frontend and backend.",
                "Implement CI/CD practices that improve deployment reliability.",
                "Mentor mid-level and junior full-stack developers."
            ],
            "Medium": [
                "Lead architecture decisions across frontend and backend systems.",
                "Drive initiatives to improve performance and scalability.",
                "Establish full-stack development standards and best practices.",
                "Implement DevOps practices that enhance delivery velocity.",
                "Mentor senior and mid-level engineers across the stack."
            ],
            "Large": [
                "Lead architecture for significant product features across the stack.",
                "Drive cross-stack performance and reliability initiatives.",
                "Establish full-stack development standards and practices.",
                "Implement CI/CD practices that improve deployment reliability.",
                "Mentor senior engineers in full-stack development."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define technical vision and architecture across the entire stack.",
                "Architect systems that scale from startup to enterprise level.",
                "Establish engineering excellence across all technology layers.",
                "Lead and develop technical talent across the organization.",
                "Collaborate with executive leadership on product and technical strategy."
            ],
            "Small": [
                "Define full-stack architecture strategy across products.",
                "Establish technical governance across the technology stack.",
                "Lead initiatives to modernize technology across all layers.",
                "Mentor engineering leaders and develop succession plans.",
                "Collaborate with executive leadership on technical roadmap."
            ],
            "Medium": [
                "Define technical strategy across frontend and backend systems.",
                "Establish architectural governance across the technology stack.",
                "Drive initiatives to improve system scalability and reliability.",
                "Develop engineering leaders through structured mentorship.",
                "Collaborate with product and engineering executives on strategy."
            ],
            "Large": [
                "Define technical vision and strategy across the stack for major areas.",
                "Establish architectural standards for frontend and backend systems.",
                "Drive innovation that enhances product quality and developer productivity.",
                "Develop engineering leaders across multiple teams and disciplines.",
                "Contribute to technical strategy discussions at executive levels."
            ]
        }
    },

    // QA Engineer templates
    "QA Engineer": {
        "0-2 years": {
            "Startup": [
                "Develop and execute comprehensive test plans for new features.",
                "Create automated tests for critical user flows.",
                "Identify and document bugs with clear reproduction steps.",
                "Participate in feature planning to provide QA perspective.",
                "Learn and apply testing methodologies appropriate for agile environments."
            ],
            "Small": [
                "Create and execute test cases for new product features.",
                "Develop automated tests using the company's test framework.",
                "Identify, document, and track bugs through resolution.",
                "Participate in sprint planning to provide QA perspective.",
                "Learn and apply testing methodologies and best practices."
            ],
            "Medium": [
                "Execute test plans for new features and releases.",
                "Create automated tests for critical user journeys.",
                "Document bugs with clear steps to reproduce.",
                "Participate in agile ceremonies and provide QA insights.",
                "Learn the product domain and testing methodologies."
            ],
            "Large": [
                "Execute test cases according to established test plans.",
                "Create automated tests following company standards.",
                "Document and track defects through the bug lifecycle.",
                "Follow established QA processes and methodologies.",
                "Build expertise in the product domain and testing tools."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Develop QA strategy and test coverage for the entire product.",
                "Build automated testing frameworks that improve test reliability.",
                "Lead test planning and execution for major releases.",
                "Implement CI/CD testing integration that catches bugs early.",
                "Mentor junior QA engineers and promote quality practices company-wide."
            ],
            "Small": [
                "Design test strategies for major product features or areas.",
                "Develop test automation frameworks and tools.",
                "Lead regression testing and quality assurance for releases.",
                "Implement testing integration in CI/CD pipelines.",
                "Mentor junior QA engineers and promote quality processes."
            ],
            "Medium": [
                "Design test strategies for major product areas or features.",
                "Improve test automation coverage and reliability.",
                "Lead test planning and execution for significant releases.",
                "Implement test metrics to track quality trends.",
                "Mentor junior QA engineers and share testing knowledge."
            ],
            "Large": [
                "Lead test planning and execution for significant features.",
                "Develop test automation frameworks and improve coverage.",
                "Implement testing integration in CI/CD pipelines.",
                "Create test metrics and quality reports for stakeholders.",
                "Mentor junior QA engineers and promote quality practices."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Define QA strategy and quality standards for the entire organization.",
                "Architect test automation frameworks that scale with product growth.",
                "Lead testing efforts across multiple product areas or teams.",
                "Implement quality metrics that drive continuous improvement.",
                "Build and lead the QA team through hiring and mentorship."
            ],
            "Small": [
                "Define QA strategy and processes across product lines.",
                "Architect automation frameworks that enhance test coverage and speed.",
                "Lead quality initiatives across multiple teams or features.",
                "Implement quality metrics that drive process improvements.",
                "Mentor QA engineers and develop technical QA leadership."
            ],
            "Medium": [
                "Lead QA strategy and quality initiatives across product areas.",
                "Design test automation architecture that scales with product growth.",
                "Drive quality metrics and continuous improvement processes.",
                "Implement testing strategies for complex product scenarios.",
                "Mentor senior QA engineers and develop leadership capabilities."
            ],
            "Large": [
                "Lead QA strategy for significant product areas or platforms.",
                "Design test automation architecture that scales with company needs.",
                "Implement quality governance and best practices across teams.",
                "Drive quality metrics and continuous improvement initiatives.",
                "Mentor senior QA engineers and develop leadership capabilities."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define company-wide quality vision and testing philosophy.",
                "Architect comprehensive QA systems that ensure product quality.",
                "Build and lead QA organization through rapid company growth.",
                "Establish quality as a core company value across all departments.",
                "Collaborate with executive leadership on quality strategy."
            ],
            "Small": [
                "Define quality vision and strategy across the organization.",
                "Establish QA processes that scale with company growth.",
                "Lead and develop QA leadership across product teams.",
                "Drive continuous quality improvement through metrics and processes.",
                "Collaborate with executive leadership on quality initiatives."
            ],
            "Medium": [
                "Define quality vision and strategy across product portfolios.",
                "Establish QA governance and standards organization-wide.",
                "Lead multiple QA teams through organizational growth.",
                "Drive quality culture across engineering and product teams.",
                "Collaborate with executive leadership on quality initiatives."
            ],
            "Large": [
                "Define quality vision and strategy for major organizational divisions.",
                "Establish QA governance and standards across multiple teams.",
                "Lead QA organization and develop testing leadership.",
                "Drive quality culture throughout the engineering organization.",
                "Collaborate with executive leadership on strategic quality initiatives."
            ]
        }
    },

    // DevOps Engineer templates
    "DevOps Engineer": {
        "0-2 years": {
            "Startup": [
                "Implement and maintain CI/CD pipelines for code deployment.",
                "Automate infrastructure provisioning using IaC tools.",
                "Monitor system performance and implement alerting mechanisms.",
                "Troubleshoot and resolve infrastructure and deployment issues.",
                "Document infrastructure and operational procedures."
            ],
            "Small": [
                "Maintain and improve CI/CD pipelines for deployment automation.",
                "Implement infrastructure as code for environment provisioning.",
                "Monitor system health and respond to alerts appropriately.",
                "Troubleshoot infrastructure and deployment issues.",
                "Document system architecture and operational procedures."
            ],
            "Medium": [
                "Maintain CI/CD pipelines for application deployments.",
                "Implement infrastructure as code using company standards.",
                "Monitor system health and respond to production incidents.",
                "Support development teams with infrastructure needs.",
                "Document operational procedures and system architecture."
            ],
            "Large": [
                "Maintain CI/CD pipelines according to established standards.",
                "Implement infrastructure as code following company patterns.",
                "Monitor system metrics and respond to alerts.",
                "Follow incident response protocols for production issues.",
                "Document operational procedures thoroughly."
            ]
        },
        "3-5 years": {
            "Startup": [
                "Design and implement scalable cloud infrastructure.",
                "Develop comprehensive CI/CD pipelines that support multiple environments.",
                "Implement security best practices across infrastructure and deployments.",
                "Design monitoring and observability solutions for the entire stack.",
                "Mentor junior DevOps engineers and promote DevOps culture."
            ],
            "Small": [
                "Design cloud infrastructure that scales with application needs.",
                "Implement advanced CI/CD pipelines with quality gates.",
                "Develop monitoring and alerting systems for production environments.",
                "Implement security best practices across infrastructure.",
                "Mentor junior DevOps engineers and share operational knowledge."
            ],
            "Medium": [
                "Design cloud architecture for application scalability and reliability.",
                "Implement advanced CI/CD pipelines with comprehensive testing.",
                "Develop monitoring and observability solutions at scale.",
                "Lead incident response for critical production issues.",
                "Mentor junior DevOps engineers and improve operational processes."
            ],
            "Large": [
                "Design infrastructure solutions for significant application components.",
                "Implement advanced CI/CD pipelines with robust quality gates.",
                "Develop monitoring solutions for application performance.",
                "Lead incident response for production issues.",
                "Mentor junior DevOps engineers in operational practices."
            ]
        },
        "5-10 years": {
            "Startup": [
                "Architect cloud infrastructure that scales from startup to enterprise.",
                "Lead DevOps transformation across the engineering organization.",
                "Implement security and compliance frameworks for all environments.",
                "Design disaster recovery and business continuity solutions.",
                "Build and lead the DevOps team through hiring and mentorship."
            ],
            "Small": [
                "Architect infrastructure that supports product scalability and reliability.",
                "Lead DevOps practices adoption across engineering teams.",
                "Implement cost optimization strategies for cloud resources.",
                "Design disaster recovery and business continuity plans.",
                "Mentor senior DevOps engineers and develop technical leadership."
            ],
            "Medium": [
                "Lead infrastructure architecture across multiple applications or services.",
                "Design DevOps practices that improve deployment reliability and frequency.",
                "Implement security and compliance measures at scale.",
                "Lead cost optimization strategies for cloud infrastructure.",
                "Mentor senior DevOps engineers and develop leadership capabilities."
            ],
            "Large": [
                "Lead infrastructure architecture for significant product areas.",
                "Design DevOps practices that scale across multiple teams.",
                "Implement security and compliance frameworks company-wide.",
                "Lead cost optimization initiatives for cloud infrastructure.",
                "Mentor senior DevOps engineers and develop leadership capabilities."
            ]
        },
        "10+ years": {
            "Startup": [
                "Define the company's infrastructure and DevOps vision and strategy.",
                "Architect multi-region, highly available infrastructure solutions.",
                "Establish DevOps culture and practices across the organization.",
                "Lead security and compliance initiatives at the organizational level.",
                "Collaborate with executive leadership on technical strategy."
            ],
            "Small": [
                "Define infrastructure and DevOps strategy across the organization.",
                "Establish governance for cloud usage and architecture.",
                "Lead initiatives for operational excellence and cost efficiency.",
                "Develop DevOps leadership across engineering teams.",
                "Collaborate with executive leadership on technical roadmap."
            ],
            "Medium": [
                "Define infrastructure and DevOps strategy across product portfolios.",
                "Establish cloud governance and cost management frameworks.",
                "Lead initiatives for operational excellence and reliability.",
                "Develop DevOps leadership through structured mentorship.",
                "Collaborate with executive leadership on strategic initiatives."
            ],
            "Large": [
                "Define infrastructure vision and strategy for major organizational divisions.",
                "Establish cloud governance and architecture standards.",
                "Lead strategic initiatives for operational excellence and reliability.",
                "Develop DevOps leadership across multiple teams.",
                "Collaborate with executive leadership on infrastructure strategy."
            ]
        }
    }
};

// DOM Elements
const roleSelect = document.getElementById('role');
const experienceSelect = document.getElementById('experience');
const companySizeSelect = document.getElementById('companySize');
const generateBtn = document.getElementById('generateBtn');
const goalsContainer = document.getElementById('goalsContainer');
const goalsList = document.getElementById('goalsList');
const copyBtn = document.getElementById('copyBtn');
const successMessage = document.getElementById('successMessage');
const feedbackLink = document.getElementById('feedbackLink');

// Event Listeners
generateBtn.addEventListener('click', generateGoals);
copyBtn.addEventListener('click', copyToClipboard);
feedbackLink.addEventListener('click', handleFeedback);

function generateGoals() {
    const role = roleSelect.value;
    const experience = experienceSelect.value;
    const companySize = companySizeSelect.value;

    if (!role || !experience || !companySize) {
        alert('Please select all options');
        return;
    }

    const goals = goalTemplates[role]?.[experience]?.[companySize];
    
    if (!goals) {
        alert('No goals found for the selected combination');
        return;
    }

    goalsList.innerHTML = '';
    goals.forEach(goal => {
        const goalItem = document.createElement('div');
        goalItem.className = 'goal-item';
        goalItem.innerHTML = `
            <textarea>${goal}</textarea>
        `;
        goalsList.appendChild(goalItem);
    });

    goalsContainer.style.display = 'block';
}

function copyToClipboard() {
    const goals = Array.from(document.querySelectorAll('.goal-item textarea'))
        .map(textarea => textarea.value)
        .join('\n\n');

    navigator.clipboard.writeText(goals)
        .then(() => {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy goals:', err);
            alert('Failed to copy goals to clipboard');
        });
}

function handleFeedback(e) {
    e.preventDefault();
    // Implement feedback functionality here
    alert('Feedback functionality coming soon!');
} 
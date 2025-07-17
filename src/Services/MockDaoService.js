// Mock data service for demo purposes
export const GetSectionsTohome = async () => {
  // Return mock data that matches the expected structure
  return [
    {
      id: 1,
      description: "Pistolas",
      products: [
        {
          id: 1,
          description: "Glock 17",
          price: 850,
          text: "Pistola semiautomática de 9mm, confiable y precisa.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 2,
          description: "Smith & Wesson M&P",
          price: 680,
          text: "Pistola moderna con excelente ergonomía.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 3,
          description: "SIG Sauer P320",
          price: 750,
          text: "Pistola modular con gran precisión.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        }
      ]
    },
    {
      id: 2,
      description: "Rifles",
      products: [
        {
          id: 4,
          description: "AR-15",
          price: 1200,
          text: "Rifle semiautomático de alta precisión.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 5,
          description: "AK-47",
          price: 950,
          text: "Rifle robusto y confiable.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 6,
          description: "M4 Carbine",
          price: 1100,
          text: "Carabina compacta de uso táctico.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        }
      ]
    },
    {
      id: 3,
      description: "Escopetas",
      products: [
        {
          id: 7,
          description: "Remington 870",
          price: 650,
          text: "Escopeta pump-action clásica y confiable.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 8,
          description: "Mossberg 500",
          price: 550,
          text: "Escopeta versátil para múltiples usos.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        }
      ]
    },
    {
      id: 4,
      description: "Accesorios",
      products: [
        {
          id: 9,
          description: "Mira Holográfica",
          price: 300,
          text: "Mira de punto rojo de alta calidad.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 10,
          description: "Silenciador",
          price: 450,
          text: "Supresor de sonido profesional.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        },
        {
          id: 11,
          description: "Cargador Extendido",
          price: 85,
          text: "Cargador de alta capacidad.",
          Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        }
      ]
    }
  ];
};

// Mock other exports that might be used
export const GetSections = async () => {
  return await GetSectionsTohome();
};

export const GetProducts = async () => {
  const sections = await GetSectionsTohome();
  return sections.flatMap(section => section.products);
};
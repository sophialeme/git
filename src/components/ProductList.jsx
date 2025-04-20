export default function ProductList() {
  const pacotes = [
    { titulo: 'Pacote Básico', preco: 'R$ 400,00' },
    { titulo: 'Pacote Família', preco: 'R$ 1.000,00' },
    { titulo: 'Pacote Premium', preco: 'R$ 2.000,00' },
    { titulo: 'Pacote Casamento', preco: 'R$ 6.000,00' },
    { titulo: 'Pacote Empresarial', preco: 'R$ 1.500,00' },
    { titulo: 'Pacote Infantil', preco: 'R$ 800,00' },
    { titulo: 'Pacote Temático', preco: 'R$ 1.200,00' },
    { titulo: 'Pacote de Assinatura', preco: 'R$ 1.500,00/mês' },
    { titulo: 'Mini Ensaio', preco: 'R$ 300,00' },
    { titulo: 'Pacote Pets', preco: 'R$ 700,00' },
    { titulo: 'Evento Social', preco: 'R$ 2.000,00' },
    { titulo: 'Pacote Maternidade', preco: 'R$ 3.500,00' },
  ]

  return (
    <div className="retangulo">
      {pacotes.map((item, index) => (
        <div key={index} className="pacote">
          <p>{item.titulo}</p>
          <p>{item.preco}</p>
        </div>
      ))}
    </div>
  )
}


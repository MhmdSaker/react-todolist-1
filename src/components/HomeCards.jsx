import Card from './Card';

const HomeCards = ({ cardData }) => {
  return (
    <section className='mt-10'>
      <div className='flex gap-5'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            bg={card.bg}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCards;

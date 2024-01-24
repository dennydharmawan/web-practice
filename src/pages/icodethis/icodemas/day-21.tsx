import { Accordion } from '@mantine/core';

import { FullScreenLayout } from '@/components/layout/full-screen-layout';

export default function AccordionExample() {
  const items = [
    {
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex esse ipsa veritatis iste ea maiores inventore ab qui tenetur illum mollitia in tempora sint cumque explicabo assumenda alias, nulla quia.',
      idx: 1,
      question: 'When will my order ship?'
    },
    {
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor architecto impedit corporis repellendus, aperiam voluptatum qui, animi odit voluptates nam dolorem ratione commodi iste aliquam sit libero. Quam, doloremque maiores?',
      idx: 2,
      question: 'What are your shipping rates'
    },
    {
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae quasi non reiciendis! Provident officia rem, expedita tempora quasi maiores, facilis eum voluptate minus qui cupiditate dicta eius culpa pariatur.',
      idx: 3,
      question: 'Do you offer gift wrapping?'
    }
  ];

  return (
    <FullScreenLayout className="bg-slate-50">
      <div className="content-grid px-36">
        <div className="prose place-self-center text-center">
          <h1>Frequently asked questions</h1>
          <p>
            Have questions? Explore our Frequently Asked Questions section for quick answers. If your question
            isn't answered, feel free to react out to our helpful support team.asd
          </p>
        </div>

        <div className="mt-12">
          <Accordion className="m-auto max-w-[750px]" variant="contained">
            {items.map((item) => (
              <Accordion.Item key={item.idx} value={item.question}>
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </FullScreenLayout>
  );
}

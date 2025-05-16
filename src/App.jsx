import CoreConcept from './components/CoreConsept';
import Header from './components/header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';

function App() {
  const [selectedTopic, setselectedTopic] = useState();

  function handlClick(selectedButton) {
    setselectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coceptItem) => <CoreConcept key={coceptItem.title} {...coceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handlClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handlClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handlClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handlClick('state')}
            >
              State
            </TabButton>
          </menu>
          {
            !selectedTopic ? <p>Please select a topic.</p>
              : (
                <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
                </div>
              )
          }
        </section>
      </main>
    </>
  );
}

export default App;
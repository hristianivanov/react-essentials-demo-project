import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';

export default function Examples() {
    const [selectedTopic, setselectedTopic] = useState();

  function handlClick(selectedButton) {
    setselectedTopic(selectedButton);
  }
    return (
        <Section id="examples" title='Examples'>
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
        </Section>
    )
}
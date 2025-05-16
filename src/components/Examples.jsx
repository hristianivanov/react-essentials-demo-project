import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
    const [selectedTopic, setselectedTopic] = useState();

    function handlClick(selectedButton) {
        setselectedTopic(selectedButton);
    }

    const tabContent = !selectedTopic ? <p>Please select a topic.</p>
        : (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );

    return (
        <Section id="examples" title='Examples'>
            <Tabs buttons={
                <>
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        onClick={() => handlClick('components')}
                    >
                        Components
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onClick={() => handlClick('jsx')}
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onClick={() => handlClick('props')}
                    >
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handlClick('state')}
                    >
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}
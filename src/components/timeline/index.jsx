import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import './style.css'

const timelineEvents = [{
 'name': 'Cборы Жениха',
 'time': '04.06.2022',
 'text': 'Бла бла бла'
},
 {
  'name': 'Cборы Невесты',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Выкуп Невесты',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Регистрация Брака',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Фотосессия',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Встреча молодожёнов',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Начало Банкета',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Праздничный салют',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 },
 {
  'name': 'Конец Банкета',
  'time': '04.06.2022',
  'text': 'Бла бла бла'
 }]

const getTimelineElements = () => timelineEvents.map(({name, time, text}) => <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date={time}
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  // icon={<WorkIcon/>}
 >
  <h3 className="vertical-timeline-element-title">{name}</h3>
  <p>
   {text}
  </p>
 </VerticalTimelineElement>
)

export default function Timeline () {
 return (
  <VerticalTimeline
   lineColor='#FFD7CB'
  >
   {getTimelineElements()}
  </VerticalTimeline>
 )
}

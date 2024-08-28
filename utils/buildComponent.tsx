import { MainHero } from 'components/MainHero'
import { Quote } from 'components/Quote'
import { Rows } from 'components/Rows'
import { Fastlink } from "components/Fastlink/"
import { Mediemodul } from 'components/Mediemodul'
import { Image } from "components/Image"
import { Text } from 'components/Text'
import { List } from 'components/List'

const componentsMap = {
  MainHero,
 // Quote,
  //Rows,
  //Fastlink,
  //Mediemodul,
  //Image,
  //Text,
  //List
}

export const buildComponent = ({ _type, ...props }) => {
  if (!_type) {
    throw new Error('Object does not have a "_type" property')
  }

  const Component = componentsMap[_type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${_type}`)
  }
  return <Component key={props._key} {...props} />
}

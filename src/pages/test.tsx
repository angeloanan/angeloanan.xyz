import Tippy, { useSingleton } from '@tippyjs/react'

interface CustomRenderDataType {
  some: string
  data: string[]
}

const customDataToPass: CustomRenderDataType = { some: 'custom', data: ['type'] }

const Something = () => {
  const [source, target] = useSingleton({ overrides: ['render'] })

  return (
    <>
      <Tippy
        singleton={source}
        render={(attrs, content) => <SomeComponent attr={attrs} data={content} />}
      />
      {/*               ^ I want this to have a custom type! */}
      {/* In here, Typescript complains that ReactNode (`content`) is not assignable to type 'CustomRenderDataType'! */}

      <Tippy singleton={target} content={customDataToPass} />
      {/*                       ^ Typescrip allows this but technically should be disallowed since CustomRenderDataType != React.ReactNode */}
    </>
  )
}

// Example render Component that takes in a custom type
const SomeComponent = ({ attr, data }: { attr: unknown; data: CustomRenderDataType }) => {
  // TODO
  return <></>
}

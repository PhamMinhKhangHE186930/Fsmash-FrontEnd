import React, { useState } from 'react'
import Header from '../component/Header'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { motion } from 'framer-motion'

const PortfolioScreen = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  })

  return (
    <div>
      <div>
        {/* <div className='fixed top-0 left-0 w-full h-12 z-[60]'
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        ></div> */}
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -100, opacity: 0 }
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='sticky top-0 z-50 backdrop-blur-md'
        >
          <Header />
        </motion.div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
          </p>
          <p>
            Fringilla quam urna. Cras turpis elit, euismod eget ligula
            quis, imperdiet sagittis justo. In viverra fermentum ex ac
            vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
            laoreet augue ut felis blandit, at iaculis odio ultrices.
            Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
            neque tincidunt a.
          </p>
          <h2>Sub-header</h2>
          <p>
            In eget sodales arcu, consectetur efficitur metus. Duis
            efficitur tincidunt odio, sit amet laoreet massa fringilla
            eu.
          </p>
          <p>
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non
            urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
            eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
            rutrum mi.
          </p>
          <p>
            Sed sem nisi, luctus consequat ligula in, congue sodales
            nisl.
          </p>
          <p>
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
            pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
            ut suscipit leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
          </p>
          <p>
            Fringilla quam urna. Cras turpis elit, euismod eget ligula
            quis, imperdiet sagittis justo. In viverra fermentum ex ac
            vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
            laoreet augue ut felis blandit, at iaculis odio ultrices.
            Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
            neque tincidunt a.
          </p>
          <h2>Sub-header</h2>
          <p>
            In eget sodales arcu, consectetur efficitur metus. Duis
            efficitur tincidunt odio, sit amet laoreet massa fringilla
            eu.
          </p>
          <p>
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non
            urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
            eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
            rutrum mi.
          </p>
          <p>
            Sed sem nisi, luctus consequat ligula in, congue sodales
            nisl.
          </p>
          <p>
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
            pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
            ut suscipit leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
          </p>
          <p>
            Fringilla quam urna. Cras turpis elit, euismod eget ligula
            quis, imperdiet sagittis justo. In viverra fermentum ex ac
            vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
            laoreet augue ut felis blandit, at iaculis odio ultrices.
            Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
            neque tincidunt a.
          </p>
          <h2>Sub-header</h2>
          <p>
            In eget sodales arcu, consectetur efficitur metus. Duis
            efficitur tincidunt odio, sit amet laoreet massa fringilla
            eu.
          </p>
          <p>
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non
            urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
            eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
            rutrum mi.
          </p>
          <p>
            Sed sem nisi, luctus consequat ligula in, congue sodales
            nisl.
          </p>
          <p>
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
            pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
            ut suscipit leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
          </p>
          <p>
            Fringilla quam urna. Cras turpis elit, euismod eget ligula
            quis, imperdiet sagittis justo. In viverra fermentum ex ac
            vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
            laoreet augue ut felis blandit, at iaculis odio ultrices.
            Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
            neque tincidunt a.
          </p>
          <h2>Sub-header</h2>
          <p>
            In eget sodales arcu, consectetur efficitur metus. Duis
            efficitur tincidunt odio, sit amet laoreet massa fringilla
            eu.
          </p>
          <p>
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non
            urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
            eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
            rutrum mi.
          </p>
          <p>
            Sed sem nisi, luctus consequat ligula in, congue sodales
            nisl.
          </p>
          <p>
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
            pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
            ut suscipit leo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam ac rhoncus quam.
          </p>
          <p>
            Fringilla quam urna. Cras turpis elit, euismod eget ligula
            quis, imperdiet sagittis justo. In viverra fermentum ex ac
            vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
            laoreet augue ut felis blandit, at iaculis odio ultrices.
            Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
            neque tincidunt a.
          </p>
          <h2>Sub-header</h2>
          <p>
            In eget sodales arcu, consectetur efficitur metus. Duis
            efficitur tincidunt odio, sit amet laoreet massa fringilla
            eu.
          </p>
          <p>
            Pellentesque id lacus pulvinar elit pulvinar pretium ac non
            urna. Mauris id mauris vel arcu commodo venenatis. Aliquam
            eu risus arcu. Proin sit amet lacus mollis, semper massa ut,
            rutrum mi.
          </p>
          <p>
            Sed sem nisi, luctus consequat ligula in, congue sodales
            nisl.
          </p>
          <p>
            Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
            pharetra leo vitae tristique rutrum. Donec ut volutpat ante,
            ut suscipit leo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioScreen
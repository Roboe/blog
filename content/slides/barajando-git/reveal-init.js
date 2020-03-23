Reveal.initialize({
    width: SLConfig.deck.width,
    height: SLConfig.deck.height,
    margin: 0.05,

    hash: true,
    controls: true,
    progress: true,
    mouseWheel: false,
    showNotes: SLConfig.deck.share_notes ? "separate-page" : false,
    slideNumber: SLConfig.deck.slide_number,

    autoSlide: SLConfig.deck.auto_slide_interval || 0,
    autoSlideStoppable: true,

    rollingLinks: false,
    center: SLConfig.deck.center || false,
    shuffle: SLConfig.deck.shuffle || false,
    loop: SLConfig.deck.should_loop || false,
    rtl: SLConfig.deck.rtl || false,

    transition: SLConfig.deck.transition,
    backgroundTransition: SLConfig.deck.background_transition,

    pdfMaxPagesPerSlide: 1,

    highlight: {
      escapeHTML: false,
    },
  });
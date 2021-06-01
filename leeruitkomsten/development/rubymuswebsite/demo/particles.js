document.addEventListener('DOMContentLoaded', () => {
  console.log("test2")
  var elements = document.querySelector('.Blur')
  let waypoint = new Waypoint({
  element: document.querySelector('.Blur'),
  handler: function particlesAnimate(){

        console.log("test")

        anime({
          targets: ".Blur:nth-child(9)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad'         
        })

        anime({
          targets: ".Blur:nth-child(8)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#FF2D2D',
          easing: 'easeInOutQuad',
          delay: 40,
        })

        anime({
          targets: ".Blur:nth-child(7)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad',
          delay: 80,
        })

        anime({
          targets: ".Blur:nth-child(6)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#FF2D2D',
          easing: 'easeInOutQuad',
          delay: 120,
        })

        anime({
          targets: ".Blur:nth-child(5)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#120061',
          easing: 'easeInOutQuad',
          delay: 160,
        })

        anime({
          targets: ".Blur:nth-child(4)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad',
          delay: 200,
        })

        anime({
          targets: ".Blur:nth-child(3)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#120061',
          easing: 'easeInOutQuad',
          delay: 240,
        })

        anime({
          targets: ".Blur:nth-child(2)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#FF2D2D',
          easing: 'easeInOutQuad',
          delay: 280,
        })

        anime({
          targets: ".Blur:nth-child(1)",
          translateX: [280, 0],
          duration: 300,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad',
          delay: 320,
        })

        anime({
          targets: ".Blur",
          delay: 320,
          opacity: 0,
        })
        this.destroy()
	  },
		offset: '70%'
	})
})
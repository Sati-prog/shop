

window.addEventListener('scroll', function () {

    document.getElementById('header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
});

const offcanvasCartEl = document.getElementById('offcanvasCart'),
      offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.querySelectorAll('.closecart').forEach(item => {

    item.addEventListener('click', (e) => {

        e.preventDefault();
        offcanvasCart.hide();

        // let href = item.href.split('#').pop();
        let href = item.dataset.href;

        offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () => {
            
            document.getElementById(href).scrollIntoView();
        });

    })
});

$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({

        margin: 20,
        responsive: {

            0: {

                items: 1
            },

            576: {

                items: 2
            },

            768: {

                items: 3
            },

            992: {

                items: 4
            }
        }
    });
});
class Accordion {
    static CLASSES = {
        TITLE: 'accordion-title',
        BODY_ACTIVE: 'accordion-body--active',
        TITLE_ACTIVE: 'accordion-title--active',
    };

    static SELECTORS = {
        TITLE: '.accordion-title',
    }

    #el = null;

    constructor(el) {
        this.#el = el;

        this.#bindEventListener();
    };

    #bindEventListener() {
        this.#el.addEventListener('click', (e) => {
            if(e.target.classList.contains(Accordion.CLASSES.TITLE)) {
                e.target.closest(Accordion.SELECTORS.TITLE).classList.
                toggle(Accordion.CLASSES.TITLE_ACTIVE);
                e.target.closest(Accordion.SELECTORS.TITLE).nextElementSibling.classList.
                toggle(Accordion.CLASSES.BODY_ACTIVE);
            };
        })
    }
}
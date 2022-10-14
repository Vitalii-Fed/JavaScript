class Accordion {
    static CLASSES = {
        CONTAINER: 'accordion-container',
        ITEM: 'accordion-item',
        TITLE: 'accordion-title',
        BODY: 'accordion-body',
        BODY_ACTIVE: 'accordion-body--active'
    };

    static SELECTORS = {
        TITLE: '.accordion-title'
    }

    #el = null;
    #itemEl = null;
    #titleEl = null;
    #bodyEl = null;

    constructor(el) {
        this.#el = el;

        this.#buildLayout();
        this.#buildlItems();
        this.#buildTitle();
        this.#buildContent();
        this.#buildEventListener();
    };

    #buildLayout() {
        this.#el.classList.add(Accordion.CLASSES.CONTAINER);
    };

    #buildlItems() {
        this.#itemEl = document.createElement('div');
        this.#itemEl.classList.add(Accordion.CLASSES.ITEM);

        this.#el.append(this.#itemEl);

        // const items = this.#el.querySelectorAll(Accordion.SELECTORS.TITLE);

        // items.forEach((item, index) => {
        //     item.classList.add(Accordion.CLASSES.TITLE);
        //     item.dataset.index = index;
        //     this.#itemEl.append(item);
        // })
    }

    #buildTitle() {
        this.#titleEl = document.createElement('div');
        this.#titleEl.classList.add(Accordion.CLASSES.TITLE);
        this.#titleEl.textContent = 'title';

        this.#itemEl.append(this.#titleEl);
    }

    #buildContent() {
        this.#bodyEl = document.createElement('div');
        this.#bodyEl.classList.add(Accordion.CLASSES.BODY);
        this.#bodyEl.textContent = 'body';

        this.#itemEl.append(this.#bodyEl);

        // const titles = this.#el.querySelectorAll(Accordion.SELECTORS.TITLE);

        // titles.forEach((item) => {
        //     item.classList.add(Accordion.CLASSES.TITLE);
        //     this.#bodyEl.append(item);
        // })
    }

    // #buildEventListener() {
    //     this.#titleEl.addEventListener('click', (e) => {
    //         if(e.target.classList.contains(Accordion.CLASSES.TITLE)) {
    //             this.#bodyEl.classList.add(Accordion.CLASSES.BODY_ACTIVE);
    //         };
    //     })
    // }
}
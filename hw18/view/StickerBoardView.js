class StickerBoardView {
    static CLASSES = {
        ADD_ITEM: 'pin-picture-add',
        DELETE_BTN: 'pin-picture-delete',
        FIELD_ITEM: 'enter-note',
    };
    static SELECTORS = {
        STICKER_ITEM: '.note',
    };

    static stickerBoardContainerTemplate = `
    <section class="container">
        <div class="addBtn">
            <p class="pin-tap">Tap to add a new sticker</p>
            <div class="pin-tap-arrow"></div>
            <button class="add-note">
                <img class="pin-picture-add" src="./images/pngwing.com.png" alt="add note">
            </button>
        </div>
        
        <div class="board"></div>
    </section>`;

    static stickersItemTemplate = `
    <form class="note" data-sticker-id="{{id}}">
        <button type="button" class="delete-note">
            <img class="pin-picture-delete" src="./images/clipart1927234.png"
            alt="delete note">
        </button>
        <textarea name="noteName" class="enter-note" rows="5">{{description}}</textarea>
    </form>`;

    static generateStickerItemHtml(sticker) {
        return interpolate(StickerBoardView.stickersItemTemplate, sticker);
    };

    static getStickerId(sticker) {
        return sticker.closest(StickerBoardView.SELECTORS.STICKER_ITEM).dataset.stickerId;
    }''

    el = null;
    #config = null;
    
    constructor(config) {
        this.#config = config;
        this.initView();
    };

    initView() {
        const board = htmlToElement(StickerBoardView.stickerBoardContainerTemplate);
        this.el = board;

        board.addEventListener('click', (e) => {
            if (e.target.classList.contains(StickerBoardView.CLASSES.DELETE_BTN)) {
                const stickerId = StickerBoardView.getStickerId(e.target);
                this.deleteSticker(stickerId);
            };

            if (e.target.classList.contains(StickerBoardView.CLASSES.ADD_ITEM)) {
                const newSticker = {
                    description: '',
                };
                this.addSticker(newSticker);
            };
        });

        board.addEventListener('change', (e) => {
            const stickerId = StickerBoardView.getStickerId(e.target);
            const updateSticker = {
                id: stickerId,
                description: e.target.value,
            };
            this.updateStickerItem(updateSticker);
        });
    };

    renderList(list) {
    this.el.children[1].innerHTML = list
        .map(StickerBoardView.generateStickerItemHtml)
        .join('');
    };

    deleteSticker(id) {
        this.#config.onDelete(id);
    };

    addSticker(newSticker) {
        this.#config.onAdd(newSticker);
    };

    updateStickerItem(id) {
        this.#config.onEdit(id);
    };
};
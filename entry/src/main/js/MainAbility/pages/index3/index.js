import app from '@system.app';
import router from '@system.router';

export default {
    data: {
        anim1Front: true,
        isOpen1: true,
        isOpen2: true,
        showPopup: false,
        frames1: [{ src: '/common/assets/colorroll3d_1/frame_047.png' }],
        frames2: [{ src: '/common/assets/colorroll3d_2/frame_047.png' }],
        framesClose1: [],
        framesClose2: [],
        framesOpen1: [
            { src: '/common/assets/colorroll3d_1/frame_001.png' },
            { src: '/common/assets/colorroll3d_1/frame_002.png' },
            { src: '/common/assets/colorroll3d_1/frame_003.png' },
            { src: '/common/assets/colorroll3d_1/frame_004.png' },
            { src: '/common/assets/colorroll3d_1/frame_005.png' },
            { src: '/common/assets/colorroll3d_1/frame_006.png' },
            { src: '/common/assets/colorroll3d_1/frame_007.png' },
            { src: '/common/assets/colorroll3d_1/frame_008.png' },
            { src: '/common/assets/colorroll3d_1/frame_009.png' },
            { src: '/common/assets/colorroll3d_1/frame_010.png' },
            { src: '/common/assets/colorroll3d_1/frame_011.png' },
            { src: '/common/assets/colorroll3d_1/frame_012.png' },
            { src: '/common/assets/colorroll3d_1/frame_013.png' },
            { src: '/common/assets/colorroll3d_1/frame_014.png' },
            { src: '/common/assets/colorroll3d_1/frame_015.png' },
            { src: '/common/assets/colorroll3d_1/frame_016.png' },
            { src: '/common/assets/colorroll3d_1/frame_017.png' },
            { src: '/common/assets/colorroll3d_1/frame_018.png' },
            { src: '/common/assets/colorroll3d_1/frame_019.png' },
            { src: '/common/assets/colorroll3d_1/frame_020.png' },
            { src: '/common/assets/colorroll3d_1/frame_021.png' },
            { src: '/common/assets/colorroll3d_1/frame_022.png' },
            { src: '/common/assets/colorroll3d_1/frame_023.png' },
            { src: '/common/assets/colorroll3d_1/frame_024.png' },
            { src: '/common/assets/colorroll3d_1/frame_025.png' },
            { src: '/common/assets/colorroll3d_1/frame_026.png' },
            { src: '/common/assets/colorroll3d_1/frame_027.png' },
            { src: '/common/assets/colorroll3d_1/frame_028.png' },
            { src: '/common/assets/colorroll3d_1/frame_029.png' },
            { src: '/common/assets/colorroll3d_1/frame_030.png' },
            { src: '/common/assets/colorroll3d_1/frame_031.png' },
            { src: '/common/assets/colorroll3d_1/frame_032.png' },
            { src: '/common/assets/colorroll3d_1/frame_033.png' },
            { src: '/common/assets/colorroll3d_1/frame_034.png' },
            { src: '/common/assets/colorroll3d_1/frame_035.png' },
            { src: '/common/assets/colorroll3d_1/frame_036.png' },
            { src: '/common/assets/colorroll3d_1/frame_037.png' },
            { src: '/common/assets/colorroll3d_1/frame_038.png' },
            { src: '/common/assets/colorroll3d_1/frame_039.png' },
            { src: '/common/assets/colorroll3d_1/frame_040.png' },
            { src: '/common/assets/colorroll3d_1/frame_041.png' },
            { src: '/common/assets/colorroll3d_1/frame_042.png' },
            { src: '/common/assets/colorroll3d_1/frame_043.png' },
            { src: '/common/assets/colorroll3d_1/frame_044.png' },
            { src: '/common/assets/colorroll3d_1/frame_045.png' },
            { src: '/common/assets/colorroll3d_1/frame_046.png' },
            { src: '/common/assets/colorroll3d_1/frame_047.png' }
        ],
        framesOpen2: [
            { src: '/common/assets/colorroll3d_2/frame_001.png' },
            { src: '/common/assets/colorroll3d_2/frame_002.png' },
            { src: '/common/assets/colorroll3d_2/frame_003.png' },
            { src: '/common/assets/colorroll3d_2/frame_004.png' },
            { src: '/common/assets/colorroll3d_2/frame_005.png' },
            { src: '/common/assets/colorroll3d_2/frame_006.png' },
            { src: '/common/assets/colorroll3d_2/frame_007.png' },
            { src: '/common/assets/colorroll3d_2/frame_008.png' },
            { src: '/common/assets/colorroll3d_2/frame_009.png' },
            { src: '/common/assets/colorroll3d_2/frame_010.png' },
            { src: '/common/assets/colorroll3d_2/frame_011.png' },
            { src: '/common/assets/colorroll3d_2/frame_012.png' },
            { src: '/common/assets/colorroll3d_2/frame_013.png' },
            { src: '/common/assets/colorroll3d_2/frame_014.png' },
            { src: '/common/assets/colorroll3d_2/frame_015.png' },
            { src: '/common/assets/colorroll3d_2/frame_016.png' },
            { src: '/common/assets/colorroll3d_2/frame_017.png' },
            { src: '/common/assets/colorroll3d_2/frame_018.png' },
            { src: '/common/assets/colorroll3d_2/frame_019.png' },
            { src: '/common/assets/colorroll3d_2/frame_020.png' },
            { src: '/common/assets/colorroll3d_2/frame_021.png' },
            { src: '/common/assets/colorroll3d_2/frame_022.png' },
            { src: '/common/assets/colorroll3d_2/frame_023.png' },
            { src: '/common/assets/colorroll3d_2/frame_024.png' },
            { src: '/common/assets/colorroll3d_2/frame_025.png' },
            { src: '/common/assets/colorroll3d_2/frame_026.png' },
            { src: '/common/assets/colorroll3d_2/frame_027.png' },
            { src: '/common/assets/colorroll3d_2/frame_028.png' },
            { src: '/common/assets/colorroll3d_2/frame_029.png' },
            { src: '/common/assets/colorroll3d_2/frame_030.png' },
            { src: '/common/assets/colorroll3d_2/frame_031.png' },
            { src: '/common/assets/colorroll3d_2/frame_032.png' },
            { src: '/common/assets/colorroll3d_2/frame_033.png' },
            { src: '/common/assets/colorroll3d_2/frame_034.png' },
            { src: '/common/assets/colorroll3d_2/frame_035.png' },
            { src: '/common/assets/colorroll3d_2/frame_036.png' },
            { src: '/common/assets/colorroll3d_2/frame_037.png' },
            { src: '/common/assets/colorroll3d_2/frame_038.png' },
            { src: '/common/assets/colorroll3d_2/frame_039.png' },
            { src: '/common/assets/colorroll3d_2/frame_040.png' },
            { src: '/common/assets/colorroll3d_2/frame_041.png' },
            { src: '/common/assets/colorroll3d_2/frame_042.png' },
            { src: '/common/assets/colorroll3d_2/frame_043.png' },
            { src: '/common/assets/colorroll3d_2/frame_044.png' },
            { src: '/common/assets/colorroll3d_2/frame_045.png' },
            { src: '/common/assets/colorroll3d_2/frame_046.png' },
            { src: '/common/assets/colorroll3d_2/frame_047.png' }
        ]
    },

    onInit() {
        this._handling = false;
        this.framesClose1 = this.framesOpen1.slice().reverse();
        this.framesClose2 = this.framesOpen2.slice().reverse();
    },

    handleToggle1() {
        if (this._handling)
        {
            return;
        }
        if(!this.isOpen1 && !this.isOpen2  && !this.anim1Front){
            return;
        }
        this._handling = true;
        let self = this;
        setTimeout(function() { self._handling = false; }, 0);

        if (this.isOpen1) {
            this.frames1 = this.framesClose1;
            this.isOpen1 = false;
        } else {
            this.frames1 = this.framesOpen1;
            this.isOpen1 = true;
        }
        this.anim1Front = true;
        this.$refs.a1front.start();

        if (!this.isOpen1 && !this.isOpen2 && this.anim1Front) {
            let self2 = this;
            setTimeout(function() {
                self2.showPopup = true;
            }, 1600);
        }
    },

    handleToggle2() {
        if (this._handling)
        { return;}

        if(!this.isOpen2 && !this.isOpen1  && this.anim1Front){
            return;
        }

        this._handling = true;
        let self = this;
        setTimeout(function() { self._handling = false; }, 0);

        if (this.isOpen2) {
            this.frames2 = this.framesClose2;
            this.isOpen2 = false;
        } else {
            this.frames2 = this.framesOpen2;
            this.isOpen2 = true;
        }
        this.anim1Front = false;
        this.$refs.a2front.start();
    },

    closePopup() {
        this.showPopup = false;
    },

    restart() {
        router.replace({ uri: 'pages/index3/index' });
    },

    touchMove(e) {
        if (e.direction === 'right') {
            app.terminate();
        }
    }
};

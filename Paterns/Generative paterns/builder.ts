enum EImageFormat {
    PNG = 'png',
    JPG = 'jpg'
}

interface IResolution {
    width: number
    height: number
}

interface IImageConversation extends IResolution {
    format: EImageFormat
}

class ImageBuilder {
    private formats: EImageFormat[] = []
    private resolutions: IResolution[] = []

    addPng() {
        if (this.formats.includes(EImageFormat.PNG)) {
            return this
        }
        this.formats.push(EImageFormat.PNG)
        return this

    }

    addJpg() {
        if (this.formats.includes(EImageFormat.JPG)) {
            return this
        }
        this.formats.push(EImageFormat.JPG)
        return this
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height})
        return this
    }

    build(): IImageConversation[] {
        const res: IImageConversation[] = []

        for(const r of this.resolutions) {
            for(const f of this.formats){
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                })
            }
        }
        return res
    }

}

console.log(new ImageBuilder()
    .addJpg()
    .addPng()
    .addResolution(200, 100)
    .addResolution(300, 500)
    .build()
)
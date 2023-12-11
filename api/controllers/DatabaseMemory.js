import {randomUUID} from 'node:crypto';

class DatabaseMemory{
    #videos = new Map();

//métodos
    create(video){//rata post
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    list(search){
        return Array.from(this.#videos.entries())
        .map((videoArry)=>{
            const id = videoArry[0];
            const data = videoArry[1];

            return {//rota get
                id: id,
                ...data
            }
        })
        .filter((video)=>{
            if(search){
                return video.produto.includes(search);
            }
            return true;
        })
        
    }
}


export default DatabaseMemory;
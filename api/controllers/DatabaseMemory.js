import {randomUUID} from 'node:crypto';

class DatabaseMemory{
    #videos = new Map();

//métodos
    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    list(){
        return Array.from(this.#videos.entries()).map((videoArry)=>{
            const id = videoArry[0];
            const data = videoArry[1];

            return {
                id: id,
                ...data
            }
        })
    }
}


export default DatabaseMemory;
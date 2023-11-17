abstract class Logger {
    abstract log(massage: string): void;

    printDate(data: Date){
        this.log(data.toString())
    }
}

class LogWithDate extends Logger {

    log(massage: string): void {
       console.log(massage)
    }

    logWithDate(massage: string) {
        this.printDate(new Date())
        this.log(massage)
    }

}

let a = new LogWithDate();
a.logWithDate('Say HI!')
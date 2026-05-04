// scrolling script

document.addEventListener("DOMContentLoaded", () => {
    const navBtn = document.getElementById("flipbook-nav");
    const sections = document.querySelectorAll("body > div");
    
    const scrollContainer = document.documentElement;

    navBtn.addEventListener("click", () => {
        const currentScroll = scrollContainer.scrollTop;
        let nextTop = 0;
        let foundNext = false;
        
        // find next section below cur scroll
        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop;
            // failsafe to ot get stuck
            if (sectionTop > currentScroll + 10) {
                nextTop = sectionTop;
                foundNext = true;
                break;
            }
        }
        
        // check if we're really at bottom/close
        const isAtBottom = Math.ceil(scrollContainer.clientHeight + currentScroll) >= Math.floor(scrollContainer.scrollHeight) - 5;
        
        // go to top or keep scrolling
        if (isAtBottom) {
            scrollContainer.scrollTo({ top: 0, behavior: "auto" });
        } else if (foundNext) {
            scrollContainer.scrollTo({ top: nextTop, behavior: "smooth" });
        } else {
            scrollContainer.scrollTo({ top: 0, behavior: "auto" });
        }
    });
});

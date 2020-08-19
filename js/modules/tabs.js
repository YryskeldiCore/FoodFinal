function tabs(tabItem, tabInfo, wrapper, activeClass){

    const tabs = document.querySelectorAll(tabItem),
          tabContent = document.querySelectorAll(tabInfo),
          tabParent = document.querySelector(wrapper);

    hideTabContent();      
    showTabContent();

    function hideTabContent(){
        tabContent.forEach(content => {
            content.classList.add('hide');
            content.classList.remove('show');
        });

        tabs.forEach(tab => {
            tab.classList.remove();
        });
    }

    function showTabContent(i = 0){
        tabContent[i].classList.add('show','fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    tabParent.addEventListener('click', (e)=> {
        const target = e.target;
        if(target && target.matches(`div${tabItem}`)){
            tabs.forEach((tab, i) => {
                if(target == tab){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;
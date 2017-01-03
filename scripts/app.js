(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    page.init();
  });

  const page = {
    init: () => {
      page.about();
      page.engineer();
      page.portfolio();
      page.skills();
    },

    about: () => {
      console.log('aobut function');
    },

    engineer: () => {
      let markup = '';

      engineerItems.map((item, idx) => {
        return markup += `
          <div class="item">
            ${item.description}
          </div>
        `
      });

      document.getElementById('engineer-root').innerHTML = markup;
    },

    portfolio: () => {
      const renderIcon = (iconSrc) => {
        let returnVal;

        switch (iconSrc) {
          case 'npm':
            returnVal = `<img class="npm icon-npm" src="http://plainicon.com/dboard/userprod/2800_a1826/prod_thumb/plainicon.com-50292-512px-812.png" alt=""/>`;
            break;
          case 'github':
            returnVal = `<i class="fa fa-github icon-github" aria-hidden="true"></i>`;
            break;
          case 'live':
            returnVal = `<span class="icon-live">Live</span>`;
            break;
          default:
            returnVal = ``;
        }

        return returnVal;
      };

      const renderSource = (source, iconSrc) => {
        let icon = renderIcon(iconSrc);
        return (
          `<span>
            <a href=${source}>
              ${icon}
            </a>
          </span>`
        )
      };

      const renderLive = (live) => {
        return (
          `<div>
            <a href=${live}>
              Live
            </a>
          </div>`
        );
      }

      let markup = '';

      portfolioItems.map((item, idx) => {
        return markup += `
          <div class="item">
            <span class="u-t-lg">${item.title}</span>
            <div>${item.description}</div>
            <div class="source">
              ${item.github ? renderSource(item.github, 'github') : ''}
              ${item.npm ? renderSource(item.npm, 'npm') : ''}
              ${item.live ? renderSource(item.live, 'live') : ''}
            </div>
          </div>
          <br/>
        `;
      });

      document.getElementById('portfolio-root').innerHTML = markup;
    },

    skills: () => {
      const renderItem = (item, idx) => {
        return (
          `${idx !== 0 ? `&nbsp;` : ``}<span>${item.title}</span>`
        );
      };

      let markup = '';

      skillsItems.map((item, idx) => {
        return markup += `
          <div class="item">
            <span class="u-t-lg">${item.category}</span>:
            <div class="skills-item__sub">
              ${item.items.map(renderItem)}
            </div>
          </div>
        `;
      });

      document.getElementById('skills-root').innerHTML = markup;
    },

  };
}());

(function(){
	let skills = [{
			title: 'Web Technologies',
			list: [{
				name: 'HTML',
				rating: 70
			}, {
				name: 'CSS',
				rating: 70
			}, {
				name: 'JavaScript',
				rating: 85
			}, {
				name: 'Node.js',
				rating: 75
			}, {
				name: 'React.js',
				rating: 40
			}]
		}, {
			title: 'Languages',
			list: [{
				name: 'C',
				rating: 50
			}, {
				name: 'C++',
				rating: 50
			}, {
				name: 'Python',
				rating: 60
			}]
		}, {
			title: 'Others',
			list: [{
				name: 'MongoDB',
				rating: 50
			}, {
				name: 'SQL',
				rating: 70
			}, {
				name: 'Git',
				rating: 40
			}, {
				name: 'Inkscape',
				rating: 60
			}, {
				name: 'Linux',
				rating: 40
			}]
		}];

		let elems = skills.map(function(aSkillList){
			let cont = document.createElement('div');
			cont.className = "skills-sub";
			let skillsTitle = document.createElement('div');
			skillsTitle.className = "skills-title";
			skillsTitle.appendChild(document.createTextNode(aSkillList.title));
			cont.appendChild(skillsTitle);

			let skillsList = document.createElement('div');
			skillsList.className = "skills-list";

			aSkillList.list.forEach(function(aSkillObj){
				let aSkill = document.createElement('div');
				aSkill.className = "a-skill";

				let skillName = document.createElement('div');
				skillName.className = "skill-name";
				skillName.appendChild(document.createTextNode(aSkillObj.name));

				let skillRating = document.createElement('div');
				skillRating.className = "skill-rating";

				let skillBoxOuter = document.createElement('div');
				skillBoxOuter.className = "skill-box-outer";

				let skillBoxInner = document.createElement('div');
				skillBoxInner.className = "skill-box-inner";
				skillBoxInner.style.width = aSkillObj.rating + "%";

				skillBoxOuter.appendChild(skillBoxInner);
				skillRating.appendChild(skillBoxOuter);

				aSkill.appendChild(skillName);
				aSkill.appendChild(skillRating);
				skillsList.appendChild(aSkill);
			});

			cont.appendChild(skillsList);
			document.getElementsByClassName('skills-text-content')[0].appendChild(cont);
		});
})();
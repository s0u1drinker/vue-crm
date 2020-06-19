let data

export const setData = (newData) => {
  data = newData
}

export const getData = () => {
  return {
    info: {
      title: 'Заявка на регистрацию в системе',
      author: 'vokkc'
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [25, 25, 25, 25],
    content: [
      {
        text: 'Приложение №25 к приказу от 09.04.2020г. №163',
        alignment: 'right'
      },
      {
        image: data.print,
        width: 150,
        alignment: 'right'
      },
      {
        text: 'Утверждаю:',
        alignment: 'right',
        margin: [0, -135, 0, 0]
      },
      {
        text: 'Главный врач ГБУЗ «ВОККЦ»',
        style: 'header'
      },
      {
        text: '__________________ В.В. Иваненко',
        style: 'header'
      },
      {
        text: 'М.п.',
        style: 'header'
      },
      {
        image: data.sign,
        width: 100,
        margin: [0, -60, 35, 0],
        alignment: 'right'
      },
      {
        text: 'ЗАЯВКА',
        style: 'alignCenter'
      },
      {
        text: 'на внесение изменений в списки Пользователей ИСПДн государственного',
        style: 'alignCenter'
      },
      {
        text: 'бюджетного учреждения здравоохранения «Волгоградский областной',
        style: 'alignCenter'
      },
      {
        text: 'клинический кардиологический центр», Волгоград от',
        style: 'alignCenter'
      },
      {
        table: {
          widths: ['*'],
          body: [
            [
              {
                text: `${data.user}, ${data.position.toLowerCase()}`,
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '(ФИО, должность)',
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ],
            [
              {
                text: data.tasks.map((task) => `${task.task[0].toLowerCase()}${task.task.slice(1)}`).join(', '),
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '(наименование ИСПДн)',
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ]
          ]
        }
      },
      {
        text: 'и наделение Пользователя полномочиями доступа к ресурсам системы',
        alignment: 'center',
        margin: [0, 5, 0, 20]
      },
      {
        table: {
          widths: [60, '*'],
          body: [
            [
              {
                text: 'Прошу',
                border: [false, false, false, false]
              },
              {
                type: 'none',
                border: [false, false, false, false],
                ul: [
                  { text: 'зарегистрировать Пользователем ИСПДн;', italics: true, decoration: 'underline' },
                  { text: 'исключить из списка Пользователей ИСПДн;', italics: true, decoration: 'lineThrough' },
                  { text: 'изменить полномочия Пользователя ИСПДн.', italics: true, decoration: 'lineThrough' }
                ]
              }
            ],
            [
              {
                text: '(ненужное зачеркнуть)',
                colSpan: 2,
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ],
            [
              {
                text: `${data.position} (${data.department})`,
                colSpan: 2,
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '(должность с указанием подразделения)',
                colSpan: 2,
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ],
            [
              {
                text: `${data.user}`,
                colSpan: 2,
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '(фамилия, имя и отчество Работника)',
                colSpan: 2,
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ]
          ]
        }
      },
      {
        text: [
          { text: 'предоставив ему полномочия', italics: true, decoration: 'underline' },
          ' ',
          { text: '(лишив его полномочий)', italics: true, decoration: 'lineThrough' },
          ', необходимые ',
          { text: '(-х)', italics: true },
          ' для решения задач:'
        ],
        margin: [0, 5, 0, 0]
      },
      {
        text: '(ненужное зачеркнуть)',
        margin: [120, 0, 10, 0],
        fontSize: 9
      },
      {
        table: {
          widths: ['*'],
          body: data.tasks.map(task => {
            return [{
              text: `${task.task} ${task.rationale}`,
              border: [false, false, false, true]
            }]
          })
        }
      },
      {
        text: '',
        margin: [0, 50, 0, 0]
      },
      {
        table: {
          widths: ['*'],
          body: [
            [
              {
                text: `${data.headDepartment.position}`,
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '(наименование должности руководителя структурного подразделения)',
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ]
          ]
        }
      },
      {
        text: '',
        margin: [0, 20, 0, 0]
      },
      {
        table: {
          widths: [100, 20, '*', 20, 100],
          body: [
            [
              {
                text: `«${data.date.day}» ${data.date.month} ${data.date.year}г.`,
                border: [false, false, false, false],
                style: 'tableRow'
              },
              {
                text: '',
                border: [false, false, false, false]
              },
              {
                text: `${data.headDepartment.name}`,
                border: [false, false, false, true],
                style: 'tableRow'
              },
              {
                text: '',
                border: [false, false, false, false]
              },
              {
                text: '',
                border: [false, false, false, true],
                style: 'tableRow'
              }
            ],
            [
              {
                text: '',
                border: [false, false, false, false]
              },
              {
                text: '',
                border: [false, false, false, false]
              },
              {
                text: '(ФИО)',
                border: [false, false, false, false],
                style: 'tableRowNote'
              },
              {
                text: '',
                border: [false, false, false, false]
              },
              {
                text: '(подпись)',
                border: [false, false, false, false],
                style: 'tableRowNote'
              }
            ]
          ]
        }
      }
    ],
    styles: {
      header: {
        alignment: 'right',
        margin: [0, 5, 0, 0]
      },
      alignCenter: {
        alignment: 'center',
        margin: [0, 5, 0, 0]
      },
      tableRowNote: {
        fontSize: 9,
        alignment: 'center'
      },
      tableRow: {
        alignment: 'center',
        margin: [0, 10, 0, 0]
      }
    }
  }
}

export default { setData, getData }

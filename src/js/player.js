// функция, которая на вход принимает объект вида {name: 'Маг', health: 90}
// возвращает ответ в виде одной из строк: healthy, wounded, critical

export default function getHealth(data) {
  if (data.health > 50) {
    return 'healthy';
  }
  if (data.health <= 50 && data.health > 15) {
    return 'wounded';
  }
  return 'critical';
}

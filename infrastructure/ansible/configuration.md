
# Ansible
Provides a simple solution to automate repetitive setup tasks. You may write a script which can do the same thing, however it will typically be longer and harder to maintain than an Ansible playbook.

## Configuration
- Ansible config files have file extension `.cfg`.
- File is divided into several sections i.e. `defaults`, `inventory`, etc.

### Default config
- Default location of Ansible config is `/etc/ansilbe/ansible.cfg`.
- Playbook subfolders will pick the main defaults file unless a default file is placed directly in the playbook directory.
- OR override the default config with an env variable `ANSIBLE_CONGI=/PATH/ansible-web.cfg ansible-playbook playbook.yml`.

### Overriding individual options
You can override options but prepending `ANSIBLE_` and uppercasing the name of the option when you run Ansible. I.e. to override just the `gathering=implicit` option `ANSIBLE_GATHERING=explicit`.



Blocked at setting up multiple git identities so I can push these notes to git